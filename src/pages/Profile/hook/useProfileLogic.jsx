import { useState, useEffect } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useFavorites } from "../../../context/FavoritesContext";
import { useBookmarks } from "../../../context/BookmarksContext";
import { useAuth } from "../../../context/AuthContext";

const monthsAZ = [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]

export const useProfileLogic = () => {
  const [activeTab, setActiveTab] = useState("Reseptlər");
  const [searchTerm, setSearchTerm] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const { favorites, dispatch: favoriteDispatch } = useFavorites();
  const { bookmarks, dispatch: bookmarkDispatch } = useBookmarks();
  const { user, isLoggedIn, viewsCount, updateUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (user) {
      setNewName(user.name || "");
      setNewAvatar(user.avatar || "");
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setNewAvatar(reader.result); };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUser({ coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUser({ name: newName, avatar: newAvatar });
    setIsEditModalOpen(false);
  };

  const formatMemberDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;
    return `${monthsAZ[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formatLastLogin = (dateString) => {
    if (!dateString) return "Bu gün";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Bu gün";
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));

    if (diffInDays === 0) return "Bu gün";
    if (diffInDays === 1) return "Dünən";
    return `${date.getDate()} ${monthsAZ[date.getMonth()]} ${date.getFullYear()}`;
  };

  const filteredFavorites = favorites.filter((item) => item.title?.toLowerCase().includes(searchTerm.toLowerCase()))
  const filteredBookmarks = bookmarks.filter((item) => item.title?.toLowerCase().includes(searchTerm.toLowerCase()))

  return {
    activeTab, setActiveTab,
    searchTerm, setSearchTerm,
    isEditModalOpen, setIsEditModalOpen,
    newName, setNewName,
    newAvatar, 
    setNewAvatar,
    favorites, favoriteDispatch,
    bookmarks, bookmarkDispatch,
    user, isLoggedIn, viewsCount, logout,
    theme, toggleTheme,
    handleImageChange, handleCoverImageChange, handleSaveProfile,
    formatMemberDate, formatLastLogin,
    filteredFavorites, filteredBookmarks
  };

};