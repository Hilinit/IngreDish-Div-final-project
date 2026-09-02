import { Link } from "react-router-dom";
import { FaRegClock, FaStar, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useFavorites } from "../../context/FavoritesContext";
import { useBookmarks } from "../../context/BookmarksContext";
import NotFound from "../../pages/NotFound";

const DetailLayout = ({ data }) => {
  const { favorites, dispatch: favoriteDispatch } = useFavorites();
  const { bookmarks, dispatch: bookmarkDispatch } = useBookmarks();
  const isBlog = data?.[0]?.isBlog || false;
  
  const isActionActive = (id) => { return isBlog ? bookmarks.some((b) => b.id === id) : favorites.some((f) => f.id === id) }

  const handleToggle = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBlog) { bookmarkDispatch({ type: "TOGGLE_BOOKMARK", payload: item }) } 
    else { favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: item }) }
  }

  return (
    <>
    {/* Kiçik yan cards */}
      {data && data.length > 0 ? (
        <div>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-4">
            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:pt-10">
              {data.slice(1, 3).map((item) => {
                const active = isActionActive(item.id);
                return (
                  <Link key={item.id} to={item.link} className="group flex flex-col sm:flex-row h-full sm:h-48 bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-md dark:shadow-neutral-900 hover:shadow-xl border border-slate-100 dark:border-neutral-800 transition-all duration-300 relative">
                    <div className="sm:w-2/5 h-40 sm:h-full relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <button type="button" onClick={(e) => handleToggle(e, item)} className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-md hover:bg-white dark:hover:bg-neutral-800 transition text-[#C2410C] z-10 cursor-pointer" >
                        {isBlog ? ( active ? <FaBookmark /> : <FaRegBookmark className="text-slate-600 dark:text-gray-300" />
                        ) : ( active ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-slate-600 dark:text-gray-300" />)}
                      </button>
                    </div>
                    <div className="sm:w-3/5 p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-[#C2410C] dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 dark:text-gray-400 text-xs line-clamp-2 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-gray-500 font-medium pt-3 border-t border-slate-100 dark:border-neutral-800 mt-2">
                        <span><FaRegClock className="inline text-slate-500 dark:text-gray-400 text-lg" /> {item.time}</span>
                        <span><FaStar className="inline text-yellow-500 text-lg pb-1" /> {item.rating}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Böyük Card */}
            <div className="lg:col-span-7 order-1">
              <Link to={data[0].link} className="group relative h-[380px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden block shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={data[0].image} alt={data[0].title} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"/>
                <button type="button" onClick={(e) => handleToggle(e, data[0])} className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-md hover:bg-white dark:hover:bg-neutral-800 transition text-lg cursor-pointer">
                  {isBlog ? ( isActionActive(data[0].id) ? <FaBookmark className="text-[#C2410C]" /> : <FaRegBookmark className="text-slate-700 dark:text-gray-300" />
                  ) : ( isActionActive(data[0].id) ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-slate-700 dark:text-gray-300" /> )}
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="bg-[#C2410C] text-xs font-semibold px-3 py-1 rounded-full w-max mb-3">
                    {data[0].highlighter}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {data[0].title}
                  </h3>
                  <p className="text-slate-200 line-clamp-2 text-sm mb-4">{data[0].description}</p>
                  <div className="flex items-center space-x-4 text-xs font-medium text-slate-300">
                    <span><FaRegClock className="inline text-slate-400 text-lg" /> {data[0].time}</span>
                    <span><FaStar className="inline text-yellow-500 text-lg pb-1" /> {data[0].rating}</span>
                    {!isBlog && data[0].difficulty && <span>👨‍🍳 {data[0].difficulty}</span>}
                  </div>
                </div>
              </Link>
            </div>
          </section>
          {/* alt cards */}
          <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.slice(3).map((item) => {
                const active = isActionActive(item.id);
                return (
                  <Link key={item.id} to={item.link} className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 dark:border-neutral-800 transition-all duration-300 flex flex-col justify-between relative" >
                    <div className="h-44 overflow-hidden relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <button type="button" onClick={(e) => handleToggle(e, item)} className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-md hover:bg-white dark:hover:bg-neutral-800 transition text-[#C2410C] z-10 cursor-pointer" >
                        {isBlog ? ( active ? <FaBookmark /> : <FaRegBookmark className="text-slate-600 dark:text-gray-300" />
                        ) : ( active ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-slate-600 dark:text-gray-300" />)}
                      </button>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white group-hover:text-[#C2410C] dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 dark:text-gray-400 text-xs line-clamp-2 mt-1">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-gray-500 font-medium pt-3 border-t border-slate-100 dark:border-neutral-800 mt-3">
                        <span><FaRegClock className="inline text-slate-500 dark:text-gray-400 text-lg pb-1" /> {item.time}</span>
                        <span><FaStar className="inline text-yellow-500 text-lg pb-1" /> {item.rating}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <NotFound message={isBlog ? "Bloqlar tapılmadı" : "Bu kateqoriyaya aid hələlik heç bir məlumat əlavə olunmayıb."}/>
      )}
    </>
  );
};

export default DetailLayout;