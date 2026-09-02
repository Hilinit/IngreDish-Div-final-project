import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaClock, FaStar, FaSearch, FaEdit, FaUtensils, FaBookOpen, FaBookmark, FaEye, FaTimes, FaCamera, FaSignOutAlt, FaPen, FaMoon } from "react-icons/fa";
import { FiMapPin, FiCalendar, FiActivity } from "react-icons/fi";
import { useFavorites } from "../context/FavoritesContext";
import { useBookmarks } from "../context/BookmarksContext";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext"; 
import GuestView from "../components/sections/GuestView";
import { MdLightMode } from "react-icons/md";

const monthsAZ = [ "Yanvar", "Fevral", "Mart", "Aprel", "May","İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Reseptlər");
  const [searchTerm, setSearchTerm] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const { favorites, dispatch: favoriteDispatch } = useFavorites();
  const { bookmarks, dispatch: bookmarkDispatch } = useBookmarks();
  const { user, isLoggedIn, viewsCount, updateUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme(); // Theme state və toggle funksiyası

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
      reader.onloadend = () => { setNewAvatar(reader.result)};
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
    const monthName = monthsAZ[date.getMonth()];
    const year = date.getFullYear();
    return `${monthName} ${year}`;
  };

  const formatLastLogin = (dateString) => {
    if (!dateString) return "Bu gün"
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return "Bu gün"
    const now = new Date();
    const diffInTime = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    if (diffInDays === 0) return "Bu gün";
    if (diffInDays === 1) return "Dünən";

    const day = date.getDate();
    const monthName = monthsAZ[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
  };

  if (!isLoggedIn || user?.isGuest) {
    return <GuestView />;
  }

  const filteredFavorites = favorites.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBookmarks = bookmarks.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans pb-16 w-full pt-16 lg:pt-24">
      
      {/* BANNER HİSSƏSİ (Arxa fon şəkli və sağ yuxarıda düymələr) */}
      <div 
        className="h-48 sm:h-80 w-full bg-cover bg-center bg-no-repeat relative" 
        style={{ 
          backgroundImage: user?.coverImage ? `url(${user.coverImage})` : `url('assets/logo.png')`, 
          backgroundSize: user?.coverImage ? "cover" : "22%" 
        }}
      >
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
        
        {/* Sağ yuxarı küncdə düymələr qrupu (Qələm və Theme Toggle) */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-25">
          {/* Theme Toggle Düyməsi */}
          <button
            onClick={toggleTheme}
            className="bg-white/80 hover:bg-white text-slate-700 p-2.5 rounded-xl shadow-md cursor-pointer transition flex items-center justify-center backdrop-blur-sm"
            title="Rejimi dəyiş"
          >
            {theme === "light" ? <FaMoon className="text-md text-amber-500" /> : <MdLightMode  className="text-md text-amber-500 font-semibold" />}
          </button>

          {/* Qələm İkonu */}
          <label htmlFor="coverImageInput" className="bg-white/80 hover:bg-white text-slate-700 p-2.5 rounded-xl shadow-md cursor-pointer transition flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm"
            title="Arxa fon şəklini dəyiş" >
            <FaPen className="text-[16px] text-[#3B4E28]" />
          </label>
        </div>

        <input type="file" id="coverImageInput" accept="image/*" onChange={handleCoverImageChange} className="hidden" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-10 space-y-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="relative shrink-0">
              <img src={user?.avatar || "https://i.pinimg.com/736x/b8/d8/c5/b8d8c54c03e3d1a3cc050578e7d46389.jpg"} alt={user?.name || "İstifadəçi"} className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {user?.name}
                  </h1>
                </div>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {user?.email || user?.username}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-emerald-600" /> Bakı, Azərbaycan
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="text-emerald-600" /> {formatMemberDate(user?.createdAt)} tarixdən üzv
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <FiActivity className="text-emerald-600" /> Son giriş: {formatLastLogin(user?.lastLogin)}
                </span>
              </div>
            </div>

            {/* DÜYMƏLƏR HİSSƏSİ */}
            <div className="shrink-0 pt-2 md:pt-0 flex flex-row sm:flex-row items-center gap-2.5 w-full md:w-auto justify-center md:justify-start">
              <button  onClick={() => setIsEditModalOpen(true)} className="flex-1 sm:flex-none bg-[#3B4E28] hover:bg-[#2e3e1f] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center justify-center gap-2" >
                <FaEdit className="text-xs" /> Profili redaktə et
              </button>

              <button onClick={logout} className="flex-1 sm:flex-none bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center justify-center gap-2" title="Hesabdan çıxış et" >
                <FaSignOutAlt className="text-xs" /> <span className="inline">Çıxış et</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-center">
            <div className="p-2">
              <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <FaHeart className="text-rose-500 text-sm" /> {favorites.length}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">Bəyənilən reseptlər</div>
            </div>

            <div className="p-2 border-l border-slate-100">
              <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <FaBookmark className="text-emerald-600 text-sm" /> {bookmarks.length}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">Yadda saxlanılan bloglar</div>
            </div>

            <div className="p-2 border-l border-slate-100">
              <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <FaBookOpen className="text-amber-500 text-sm" /> {favorites.length + bookmarks.length}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">Cəmi kolleksiya</div>
            </div>

            <div className="p-2 border-l border-slate-100">
              <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <FaEye className="text-blue-500 text-sm" /> {viewsCount || 0}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">Baxılan səhifələr</div>
            </div>
          </div>
        </div>

        {/* TABLAR VƏ MƏZMUN */}
        <div className="space-y-6 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-6 sm:gap-8">
              {[
                { id: "Reseptlər", label: `Bəyənilən Reseptlər (${favorites.length})`, icon: <FaUtensils /> },
                { id: "Bloglar", label: `Yadda Saxlanılan Bloglar (${bookmarks.length})`, icon: <FaBookOpen /> },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-xs sm:text-sm font-semibold transition relative pb-3 -mb-3 flex items-center gap-2 ${
                      isActive ? "text-slate-900 border-b-2 border-[#3B4E28]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span className="text-xs">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Axtarış edin..."
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 pr-8 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <FaSearch className="absolute right-3 top-3 text-slate-400 text-xs" />
            </div>
          </div>

          {/* RESEPTLƏR TABI */}
          {activeTab === "Reseptlər" && (
            <div>
              {filteredFavorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredFavorites.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group flex flex-col justify-between relative"
                    >
                      <Link to={card.link || `/recipedetail/${card.id}`}>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                          {card.category && (
                            <span className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-lg">
                              {card.category}
                            </span>
                          )}
                        </div>
                      </Link>

                      <button
                        onClick={() => favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: card })}
                        className="absolute top-2.5 right-2.5 bg-white/90 hover:bg-white text-rose-500 p-2 rounded-full shadow-sm transition z-10"
                        title="Bəyənməni ləğv et"
                      >
                        <FaHeart className="text-xs" />
                      </button>

                      <div className="p-4 space-y-2">
                        <Link to={card.link || `/recipedetail/${card.id}`}>
                          <h3 className="font-bold text-slate-800 text-sm line-clamp-1 hover:text-amber-600 transition">
                            {card.title}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                          {card.time && (
                            <span className="flex items-center gap-1">
                              <FaClock className="text-slate-300 text-xs" />
                              {card.time}
                            </span>
                          )}
                          {card.rating && (
                            <span className="flex items-center gap-1 font-semibold text-slate-700">
                              <FaStar className="text-amber-400 text-xs" />
                              {card.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 text-slate-400 text-sm font-medium">
                  {searchTerm ? "Axtarışa uyğun resept tapılmadı." : "Hələ heç bir resepti bəyənməmisiniz."}
                </div>
              )}
            </div>
          )}

          {/* BLOGLAR TABI */}
          {activeTab === "Bloglar" && (
            <div>
              {filteredBookmarks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredBookmarks.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group flex flex-col justify-between relative"
                    >
                      <Link to={card.link || `/blogdetail/${card.id}`}>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                          {card.category && (
                            <span className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-lg">
                              {card.category}
                            </span>
                          )}
                        </div>
                      </Link>

                      <button
                        onClick={() => bookmarkDispatch({ type: "TOGGLE_BOOKMARK", payload: card })}
                        className="absolute top-2.5 right-2.5 bg-white/90 hover:bg-white text-amber-500 p-2 rounded-full shadow-sm transition z-10"
                        title="Yaddaşdan sil"
                      >
                        <FaBookmark className="text-xs" />
                      </button>

                      <div className="p-4 space-y-2">
                        <Link to={card.link || `/blogdetail/${card.id}`}>
                          <h3 className="font-bold text-slate-800 text-sm line-clamp-1 hover:text-amber-600 transition">
                            {card.title}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                          {card.time && (
                            <span className="flex items-center gap-1">
                              <FaClock className="text-slate-300 text-xs" />
                              {card.time}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 text-slate-400 text-sm font-medium">
                  {searchTerm ? "Axtarışa uyğun blog tapılmadı." : "Hələ heç bir blogu yadda saxlamamısınız."}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PROFİLİ REDAKTƏ ETMƏK ÜÇÜN MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition"
            >
              <FaTimes className="text-xs" />
            </button>

            <h2 className="text-xl font-bold text-slate-900 text-center">Profili Redaktə Et</h2>

            <form onSubmit={handleSaveProfile} className="space-y-6">
              
              {/* Profil Şəkli */}
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="relative group">
                  <img 
                    src={newAvatar || "https://i.pinimg.com/736x/b8/d8/c5/b8d8c54c03e3d1a3cc050578e7d46389.jpg"} 
                    alt="Profil" 
                    className="w-28 h-28 rounded-3xl object-cover border-4 border-slate-100 shadow-md"
                  />
                  <label htmlFor="avatarInput" className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer text-white">
                    <FaCamera className="text-xl" />
                  </label>
                </div>
                
                <input 
                  type="file" 
                  id="avatarInput" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" 
                />
                
                <label htmlFor="avatarInput" className="text-xs text-emerald-600 font-semibold cursor-pointer hover:underline">
                  Yeni şəkil yüklə
                </label>
              </div>

              {/* Ad Soyad */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600">Ad Soyad</label>
                <input 
                  type="text" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Adınızı daxil edin"
                />
              </div>

              {/* E-poçt */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600">E-poçt (Gmail)</label>
                <input 
                  type="email" 
                  value={user?.email || ""} 
                  disabled 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-400 cursor-not-allowed"
                />
              </div>

              {/* Düymələr */}
              <div className="flex items-center gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-3 rounded-xl transition"
                >
                  Ləğv et
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-[#3B4E28] hover:bg-[#2e3e1f] text-white text-xs font-semibold py-3 rounded-xl transition shadow-sm"
                >
                  Yadda saxla
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;