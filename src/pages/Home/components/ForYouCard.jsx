import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../../context/FavoritesContext";

const ForYouCard = ({ item }) => {
  const { favorites, dispatch } = useFavorites();
  const isFav = favorites.some((fav) => String(fav.id) === String(item.id));

  return (
    <article className="flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-slate-100 dark:border-neutral-800 hover:shadow-[0_8px_30px_rgba(194,65,12,0.15)] dark:hover:shadow-[0_8px_30px_rgba(194,65,12,0.15)] group relative">
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Link to={`/recipedetail/${item.id}`}>
          <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        </Link>
        <button onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: item })} className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition z-10 cursor-pointer" >
          {isFav ? ( <FaHeart className="text-red-500 text-sm" /> ) : ( 
            <FaRegHeart className="text-slate-600 dark:text-slate-300 hover:text-red-500 text-sm transition" /> 
          )}
        </button>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 px-4">
          <Link to={`/recipedetail/${item.id}`}>
            <h3 className="text-lg sm:text-xl font-bold text-white text-center group-hover:text-orange-400 transition line-clamp-1 drop-shadow-md">
              {item.title}
            </h3>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ForYouCard;