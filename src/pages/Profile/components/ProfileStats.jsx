import { FaHeart, FaBookmark, FaBookOpen, FaEye } from "react-icons/fa";

const ProfileStats = ({ favoritesLength, bookmarksLength, viewsCount }) => {

  const stats = [
    { id: "favorites", value: favoritesLength, label: "Bəyənilən reseptlər", icon: <FaHeart className="text-rose-500 text-sm" />},
    { id: "bookmarks", value: bookmarksLength, label: "Yadda saxlanılan bloglar", icon: <FaBookmark className="text-[#C2410C] dark:text-orange-400 text-sm" />},
    { id: "total", value: favoritesLength + bookmarksLength, label: "Cəmi kolleksiya", icon: <FaBookOpen className="text-amber-500 text-sm" />},
    { id: "views", value: viewsCount || 0, label: "Baxılan səhifələr", icon: <FaEye className="text-blue-500 text-sm" />}
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-neutral-800 text-center">
      {stats.map((stat, index) => (
        <div key={stat.id} className={`p-2 ${index > 0 ? "border-l border-slate-100 dark:border-neutral-800" : ""}`}>
          <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
            {stat.icon} {stat.value}
          </div>
          <div className="text-xs text-slate-400 dark:text-slate-400 font-medium mt-1"> {stat.label} </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileStats;