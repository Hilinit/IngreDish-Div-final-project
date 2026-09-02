



import { useState } from "react";
import { PiChefHatFill } from "react-icons/pi";
import { FaStar, FaHeart, FaRegHeart, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import RecipeFilters from "../components/RecipeFilters";
import Title from "../../../components/ui/Title";
import { useFavorites } from "../../../context/FavoritesContext";

const RecipeCards = ({ data, title, dec }) => {
  const [sortType, setSortType] = useState("all");
  const { favorites, dispatch } = useFavorites();

  const sortedData = [...(data || [])].sort((a, b) => {
      if (sortType === "popular") { return (Number(b.rating) || 0) - (Number(a.rating) || 0) }
      if (sortType === "time") { return (Number(a.time) || 0) - (Number(b.time) || 0) }
      return 0;
    });

  return (
    <section className="pt-4 sm:py-12 text-gray-800 dark:text-gray-100 transition-colors">
      <div className="container px-2 mx-auto">
        <Title title={title} dec={dec} />
        <RecipeFilters sortType={sortType} setSortType={setSortType} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sortedData.map((item) => {
            const isFav = favorites.some((fav) => String(fav.id) === String(item.id));
            return (
              <Link to={`/recipedetail/${item.id}`} key={item.id} className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(194,65,12,0.15)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] border border-slate-100 dark:border-neutral-800 hover:border-[#C2410C]/40 dark:hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>

                  <button onClick={(e) => { e.preventDefault(); dispatch({ type: "TOGGLE_FAVORITE", payload: item })}} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-neutral-800 transition z-10" title={isFav ? "Bəyənməni ləğv et" : "Bəyən"} >
                    {isFav ? ( <FaHeart className="text-rose-500 text-lg" /> ) : ( <FaRegHeart className="text-gray-600 dark:text-gray-300 text-lg hover:text-rose-500 transition" /> )}
                  </button>

                  <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md text-slate-800 dark:text-slate-200 rounded-full px-3 py-1.5 text-sm font-medium shadow-sm">
                    <FaClock className="inline mr-1 text-gray-600 dark:text-gray-400" />
                    {item.time} dəq
                  </div>
                </div>

                <div className="px-4 py-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-[#C2410C] dark:group-hover:text-orange-400 transition">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-1 text-sm font-medium 
                    ${ item.difficulty === "Çətin" ? "text-red-600 dark:text-red-400" : item.difficulty === "Orta" ? "text-orange-500 dark:text-orange-400" : "text-[#C2410C] dark:text-orange-400" }`} >
                      <PiChefHatFill className="text-xl" />
                      {item.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                      <FaStar className="text-amber-400" />
                      {item.rating}
                      {item.reviewCount && (
                        <span className="text-gray-500 dark:text-gray-400">({item.reviewCount})</span>
                      )}
                    </span>
                  </div>
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecipeCards;





