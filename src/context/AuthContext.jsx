import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CLOUDINARY_CLOUD_NAME = "atxbjlpo"; 
const CLOUDINARY_UPLOAD_PRESET = "my_default";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const api = axios.create({
  baseURL: "https://69c53df08a5b6e2dec2c09e9.mockapi.io",
  headers: { "Content-Type": "application/json" }
});

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("app_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => { return localStorage.getItem("isLoggedIn") === "true"})
  const [viewsCount, setViewsCount] = useState(() => { return Number(localStorage.getItem("viewsCount")) || 0})

  useEffect(() => {
    if (user) { localStorage.setItem("app_user", JSON.stringify(user)) } 
    else { localStorage.removeItem("app_user")}
  }, [user]);

  useEffect(() => { localStorage.setItem("isLoggedIn", isLoggedIn)}, [isLoggedIn]);

  // Səhifə hər dəfə yenilənəndə və ya tətbiq açılanda son giriş tarixini bu günə yeniləyirik
  useEffect(() => {
    const updateLastLoginOnMount = async () => {
      if (user && user.id && isLoggedIn && !user.isGuest) {
        const now = new Date().toISOString();
        try {
          const response = await api.put(`/users/${user.id}`, { lastLogin: now });
          setUser(response.data);
        } catch (error) {
          console.error("Son giriş tarixi yenilənərkən xəta:", error);
          setUser(prev => ({ ...prev, lastLogin: now }));
        }
      }
    };

    updateLastLoginOnMount();
  }, []);

  const uploadImageToCloudinary = async (base64String) => {
    if (!base64String || typeof base64String !== "string" || !base64String.startsWith("data:image")) { return base64String }

    try {
      const formData = new FormData();
      formData.append("file", base64String);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Cloudinary yükləmə xətası:", error);
      return base64String; 
    }
  };

  const login = async (userData) => {
    try {
      const now = new Date().toISOString();
      const responseUsers = await api.get("/users");
      const existingUser = responseUsers.data.find(u => u.email === userData.email);

      if (existingUser) {
        // Mövcud istifadəçinin son giriş tarixini serverdə və state-də yeniləyirik
        const updatedResponse = await api.put(`/users/${existingUser.id}`, { lastLogin: now });
        setUser(updatedResponse.data);
        setIsLoggedIn(true);
        return;
      }
    
      let lastAvatar = userData?.avatar || "";
      if (lastAvatar.startsWith("data:image")) { lastAvatar = await uploadImageToCloudinary(lastAvatar) }

      let lastCover = userData?.coverImage || "";
      if (lastCover.startsWith("data:image")) { lastCover = await uploadImageToCloudinary(lastCover) }

      const payload = { 
        ...userData, 
        avatar: lastAvatar, 
        coverImage: lastCover, 
        createdAt: userData?.createdAt || now, 
        lastLogin: now, 
        isGuest: false 
      };

      const response = await api.post("/users", payload);
      setUser(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Giriş zamanı xəta baş verdi:", error);
      const now = new Date().toISOString();
      setUser({ ...userData, lastLogin: now, isGuest: false });
      setIsLoggedIn(true);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      let dataToUpdate = { ...updatedData };
      if (dataToUpdate.avatar && dataToUpdate.avatar.startsWith("data:image")) {
        dataToUpdate.avatar = await uploadImageToCloudinary(dataToUpdate.avatar);
      }
      if (dataToUpdate.coverImage && dataToUpdate.coverImage.startsWith("data:image")) {
        dataToUpdate.coverImage = await uploadImageToCloudinary(dataToUpdate.coverImage);
      }

      if (user?.id) {
        const response = await api.put(`/users/${user.id}`, dataToUpdate);
        setUser(response.data);
      } else {
        setUser((prevUser) => {
          if (!prevUser) return null;
          return { ...prevUser, ...dataToUpdate };
        });
      }
    } catch (error) {
      console.error("Profil yenilənərkən xəta baş verdi:", error);
      setUser((prevUser) => {
        if (!prevUser) return null;
        return { ...prevUser, ...updatedData };
      });
    }
  };

  const loginAsGuest = () => {
    const guestUser = {
      name: "Qonaq İstifadəçi",
      isGuest: true,
      lastLogin: new Date().toISOString(),
    };

    setUser(guestUser);
    setIsLoggedIn(false);
  };

  const logout = () => { 
    setUser(null); 
    setIsLoggedIn(false); 
    localStorage.clear();
    window.location.reload();
  };

  const incrementViews = (pageKey) => {
    if (!pageKey) return;
    const hasViewed = localStorage.getItem(`viewed_${pageKey}`);
    if (hasViewed) return;
    localStorage.setItem(`viewed_${pageKey}`, "true");
    setViewsCount((prev) => {
      const updated = Number(prev || 0) + 1;
      localStorage.setItem("viewsCount", updated);
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, login, loginAsGuest, logout, viewsCount, incrementViews, updateUser }} >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};