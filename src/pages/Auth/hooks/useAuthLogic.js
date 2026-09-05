import { useState, useEffect } from "react";
import { uploadImageToCloudinary, fetchUsers, updateUserApi, createUserApi } from "../../../services/authService";

export function useAuthLogic() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("app_user")) || null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const [viewsCount, setViewsCount] = useState(() => Number(localStorage.getItem("viewsCount")) || 0);

  useEffect(() => { user ? localStorage.setItem("app_user", JSON.stringify(user)) : localStorage.removeItem("app_user") }, [user]);

  useEffect(() => { localStorage.setItem("isLoggedIn", isLoggedIn); }, [isLoggedIn]);

  // Son giriş tarixi
  useEffect(() => {
    if (!user?.id || !isLoggedIn || user.isGuest) return;
    const now = new Date().toISOString();
    updateUserApi(user.id, { lastLogin: now })
      .then(res => setUser(res.data))
      .catch(err => {
        console.log("Son giriş xətası:", err);
        setUser(prev => ({ ...prev, lastLogin: now }));
      });
  }, []);

 
  const handleImageUpload = async (data) => {
    let updated = { ...data };
    if (updated.avatar?.startsWith("data:image")) updated.avatar = await uploadImageToCloudinary(updated.avatar);
    if (updated.coverImage?.startsWith("data:image")) updated.coverImage = await uploadImageToCloudinary(updated.coverImage);
    return updated;
  };

  const login = async (userData) => {
    try {
      const now = new Date().toISOString();
      const { data: users } = await fetchUsers();
      const existing = users.find(u => u.email === userData.email);

      if (existing) {
        const res = await updateUserApi(existing.id, { lastLogin: now });
        setUser(res.data);
        setIsLoggedIn(true);
        return;
      }

      const processedData = await handleImageUpload(userData);
      const payload = { ...processedData, createdAt: userData?.createdAt || now, lastLogin: now, isGuest: false };
      
      const res = await createUserApi(payload);
      setUser(res.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Giriş xətası:", error);
      setUser({ ...userData, lastLogin: new Date().toISOString(), isGuest: false });
      setIsLoggedIn(true);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const processedData = await handleImageUpload(updatedData);
      if (user?.id) {
        const res = await updateUserApi(user.id, processedData);
        setUser(res.data);
      } else {
        setUser(prev => (prev ? { ...prev, ...processedData } : null));
      }
    } catch (error) {
      console.log("Profil yenilənmə xətası:", error);
      setUser(prev => (prev ? { ...prev, ...updatedData } : null));
    }
  };

  const loginAsGuest = () => {
    setUser({ name: "Qonaq İstifadəçi", isGuest: true, lastLogin: new Date().toISOString() });
    setIsLoggedIn(false);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
    window.location.reload();
  };

  const incrementViews = (pageKey) => {
    if (!pageKey || localStorage.getItem(`viewed_${pageKey}`)) return;
    localStorage.setItem(`viewed_${pageKey}`, "true");
    setViewsCount(prev => {
      const updated = Number(prev || 0) + 1;
      localStorage.setItem("viewsCount", updated);
      return updated;
    });
  };

  return { user, setUser, isLoggedIn, viewsCount, login, updateUser, loginAsGuest, logout, incrementViews };
}