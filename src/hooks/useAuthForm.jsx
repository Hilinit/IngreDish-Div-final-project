import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

export const useAuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const { login, loginAsGuest, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "name" && !value.trim()) errorMsg = "Ad və soyad daxil edilməlidir.";
    else if (name === "email") {
      if (!value.trim()) errorMsg = "E-poçt daxil edilməlidir.";
      else if (!emailRegex.test(value)) errorMsg = "Düzgün e-poçt formatı daxil edin.";
    } else if (name === "password") {
      if (!value.trim()) errorMsg = "Şifrə daxil edilməlidir.";
      else if (!passwordRegex.test(value)) errorMsg = "Şifrə min. 8 simvol, 1 böyük hərf, 1 kiçik hərf və 1 rəqəm olmalıdır.";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (activeTab === "register" && !formData.name.trim()) { newErrors.name = "Ad və soyad daxil edilməlidir." }
    if (!formData.email.trim()) { newErrors.email = "E-poçt daxil edilməlidir." } 
    else if (!emailRegex.test(formData.email)) { newErrors.email = "Düzgün e-poçt formatı daxil edin." }
    if (!formData.password.trim()) { newErrors.password = "Şifrə daxil edilməlidir." } 
    else if (!passwordRegex.test(formData.password)) { newErrors.password = "Şifrə tələblərə cavab vermir." }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("https://69c53df08a5b6e2dec2c09e9.mockapi.io/users");
      const users = response.data;

      if (activeTab === "register") {
        const userExists = users.find(u => u.email === formData.email);
        if (userExists) {
          setErrors({ email: "Bu e-poçt ilə artıq qeydiyyatdan keçilib." });
          return;
        }

        await login({ 
          name: formData.name, 
          email: formData.email, 
          password: formData.password, 
          username: formData.email.split("@")[0] 
        });
        navigate("/profile");

      } else {
        const foundUser = users.find(u => u.email === formData.email);

        if (!foundUser) {
          setErrors({ email: "İstifadəçi tapılmadı. Zəhmət olmasa qeydiyyatdan keçin." });
          return;
        }

        if (foundUser.password && foundUser.password !== formData.password) {
          setErrors({ password: "Şifrə yanlışdır." });
          return;
        }

        if (!foundUser.password) { await updateUser({ ...foundUser, password: formData.password }) }

        await login(foundUser);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Giriş zamanı xəta:", error);
      setErrors({ email: "Serverlə əlaqə qopdu, zəhmət olmasa yenidən cəhd edin." });
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate("/profile");
  };

  return { activeTab, formData, errors, handleTabSwitch, handleChange, handleSubmit, handleGuestLogin };
};