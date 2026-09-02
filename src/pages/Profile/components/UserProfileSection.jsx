import { FaEdit, FaSignOutAlt,  FaHeart, FaBookmark, FaBookOpen, FaEye } from "react-icons/fa";
import { FiMapPin, FiCalendar, FiActivity } from "react-icons/fi";

const UserProfileSection = ({ user, onOpenEditModal, logout, formatMemberDate, formatLastLogin, favorites = [], bookmarks = [], viewsCount = 0 }) => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-10">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-neutral-800 relative transition-colors">
          

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="relative shrink-0">
              <img loading="lazy" src={user?.avatar || "https://i.pinimg.com/736x/b8/d8/c5/b8d8c54c03e3d1a3cc050578e7d46389.jpg"}  alt={user?.name || "İstifadəçi"}  className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white dark:border-neutral-800 shadow-lg" />
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{user?.name}</h1>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1">{user?.email || user?.username}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-[#C2410C] dark:text-orange-400" /> Bakı, Azərbaycan
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="text-[#C2410C] dark:text-orange-400" /> {formatMemberDate(user?.createdAt)} tarixdən üzv
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                  <FiActivity className="text-[#C2410C] dark:text-orange-400" /> Son giriş: {formatLastLogin(user?.lastLogin)}
                </span>
              </div>
            </div>

            <div className="shrink-0 pt-2 md:pt-0 flex flex-row items-center gap-2.5 w-full md:w-auto justify-center md:justify-start">
              <button 
                onClick={onOpenEditModal} 
                className="flex-1 sm:flex-none bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaEdit className="text-xs" /> Profili redaktə et
              </button>
              
              <button 
                onClick={logout} 
                className="flex-1 sm:flex-none bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50 text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer" 
                title="Hesabdan çıxış et"
              >
                <FaSignOutAlt className="text-xs" /> <span className="inline">Çıxış et</span>
              </button>
            </div>
          </div>

          {/* Statistika Hissəsi (Eyni qutunun daxilində aşağıda) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-neutral-800 text-center">
            <div className="p-2">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                <FaHeart className="text-rose-500 text-sm" /> {favorites.length}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1">Bəyənilən reseptlər</div>
            </div>

            <div className="p-2 border-l border-slate-100 dark:border-neutral-800">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                <FaBookmark className="text-[#C2410C] dark:text-orange-400 text-sm" /> {bookmarks.length}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1">Yadda saxlanılan bloglar</div>
            </div>

            <div className="p-2 border-l border-slate-100 dark:border-neutral-800">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                <FaBookOpen className="text-amber-500 text-sm" /> {favorites.length + bookmarks.length}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1">Cəmi kolleksiya</div>
            </div>

            <div className="p-2 border-l border-slate-100 dark:border-neutral-800">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                <FaEye className="text-blue-500 text-sm" /> {viewsCount || 0}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1">Baxılan səhifələr</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserProfileSection;