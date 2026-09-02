import { Link } from "react-router-dom";
import { FaUtensils, FaBookOpen, FaSearch, FaHeart, FaBookmark, FaClock, FaStar } from "react-icons/fa";

const ProfileTabs = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, favorites = [], bookmarks = [], filteredFavorites = [], filteredBookmarks = [], favoriteDispatch, bookmarkDispatch}) => {
    const Tabs =[
        { id: "Reseptlər", label: `Bəyənilən Reseptlər (${favorites.length})`, icon: <FaUtensils /> },
        { id: "Bloglar", label: `Yadda Saxlanılan Bloglar (${bookmarks.length})`, icon: <FaBookOpen /> },
      ]
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-neutral-800 pb-3">
        <div className="flex items-center gap-6 sm:gap-8">
          {Tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-xs sm:text-sm font-semibold transition relative pb-3 -mb-3 flex items-center gap-2 cursor-pointer
                ${isActive ? "text-slate-900 dark:text-white border-b-2 border-[#C2410C] dark:border-orange-500" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"}`}>
                <span className="text-xs">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64 mt-2">
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Axtarış edin..." className="w-full bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-800 dark:text-slate-100 rounded-xl px-3.5 py-2 pr-8 text-xs focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20 dark:focus:ring-orange-500/20 focus:border-[#C2410C] dark:focus:border-orange-500 transition" />
          <FaSearch className="absolute right-3 top-3 text-slate-400 dark:text-slate-500 text-xs" />
        </div>
      </div>

      {activeTab === "Reseptlər" && (
        <div>
          {filteredFavorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFavorites.map((card) => (
                <div key={card.id} className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-neutral-800 hover:shadow-md transition group flex flex-col justify-between relative">
                  <Link to={card.link || `/recipedetail/${card.id}`}>
                    <div className="relative h-44 overflow-hidden">
                      <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
                      {card.category && (
                        <span className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-lg">
                          {card.category}
                        </span>
                      )}
                    </div>
                  </Link>

                  <button onClick={() => favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: card })} className="absolute top-2.5 right-2.5 bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 text-rose-500 p-2 rounded-full shadow-sm transition z-10 cursor-pointer" title="Bəyənməni ləğv et" >
                    <FaHeart className="text-xs" />
                  </button>

                  <div className="p-4 space-y-2">
                    <Link to={card.link || `/recipedetail/${card.id}`}>
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm line-clamp-1 hover:text-[#C2410C] dark:hover:text-orange-400 transition">
                        {card.title}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-400 pt-1">
                      {card.time && (
                        <span className="flex items-center gap-1">
                          <FaClock className="text-slate-300 dark:text-slate-500 text-xs" />
                          {card.time}
                        </span>
                      )}
                      {card.rating && (
                        <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
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
            <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800 text-slate-400 dark:text-slate-500 text-sm font-medium">
              {searchTerm ? "Axtarışa uyğun resept tapılmadı." : "Hələ heç bir resepti bəyənməmisiniz."}
            </div>
          )}
        </div>
      )}

      {activeTab === "Bloglar" && (
        <div>
          {filteredBookmarks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBookmarks.map((card) => (
                <div key={card.id} className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-neutral-800 hover:shadow-md transition group flex flex-col justify-between relative">
                  <Link to={card.link || `/blogdetail/${card.id}`}>
                    <div className="relative h-44 overflow-hidden">
                      <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      {card.category && (
                        <span className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-lg">
                          {card.category}
                        </span>
                      )}
                    </div>
                  </Link>

                  <button onClick={() => bookmarkDispatch({ type: "TOGGLE_BOOKMARK", payload: card })} className="absolute top-2.5 right-2.5 bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 text-[#C2410C] dark:text-orange-400 p-2 rounded-full shadow-sm transition z-10 cursor-pointer" title="Yaddaşdan sil" >
                    <FaBookmark className="text-xs" />
                  </button>

                  <div className="p-4 space-y-2">
                    <Link to={card.link || `/blogdetail/${card.id}`}>
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm line-clamp-1 hover:text-[#C2410C] dark:hover:text-orange-400 transition">
                        {card.title}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-400 pt-1">
                      {card.time && (
                        <span className="flex items-center gap-1">
                          <FaClock className="text-slate-300 dark:text-slate-500 text-xs" />
                          {card.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800 text-slate-400 dark:text-slate-500 text-sm font-medium">
              {searchTerm ? "Axtarışa uyğun blog tapılmadı." : "Hələ heç bir blogu yadda saxlamamısınız."}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;