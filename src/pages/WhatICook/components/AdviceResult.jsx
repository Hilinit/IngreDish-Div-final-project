import { useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaChartBar, FaHeart, FaRegHeart, FaQuestionCircle } from "react-icons/fa"
// import { RECIPES } from "../../provider/data/recipes"
import { useFavorites } from "../../../context/FavoritesContext"
import { useAppData } from "../../../hooks/useAppData";

const AdviceResult = ({ selectedIds = [], allIngredients = [] }) => {
  const { recipes } = useAppData()
  const [showInfo, setShowInfo] = useState(false)
  const { favorites, dispatch } = useFavorites()
  
  const matchedRecipes = recipes.map((recipe) => {
    const recipeIngredientIds = recipe.ingredientIds || []
    const matchingCount = recipeIngredientIds.filter((id) =>
      selectedIds.some( (selectedId) => String(selectedId) === String(id))).length
    const matchPercentage = recipeIngredientIds.length > 0 ? Math.round((matchingCount / recipeIngredientIds.length) * 100 ) : 0
    return { ...recipe, matchingCount, matchPercentage }
  })
    .filter((recipe) => recipe.matchingCount > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between relative">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white"> Sizə uyğun reseptlər ({matchedRecipes.length})</h2>
        <div className="relative inline-block" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
          <button type="button" className="text-xs text-slate-500 dark:text-gray-400 hover:text-[#C2410C] dark:hover:text-orange-400 flex items-center gap-1 font-medium transition cursor-pointer py-1" >
            <FaQuestionCircle className="text-[#C2410C] dark:text-orange-400" />  Necə işləyir? </button>
          {showInfo && (
            <div className="absolute right-0 top-full mt-1 w-64 p-3 bg-slate-900 dark:bg-neutral-800 text-white text-xs rounded-xl shadow-xl z-30 border border-neutral-700">
              <p className="font-semibold mb-1 text-orange-400">Alqoritm haqqında:</p>
              <p className="text-slate-300 dark:text-gray-300 leading-relaxed">
                Seçdiyiniz inqrediyentlər reseptlərdəki inqrediyentlərlə
                müqayisə olunur. Daha çox uyğun inqrediyentə sahib olan
                reseptlər aşağıda göstərilir.
              </p>
              <div className="absolute -top-1 right-4 w-2 h-2 bg-slate-900 dark:bg-neutral-800 rotate-45 border-l border-t border-neutral-700" />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {matchedRecipes.length > 0 ? ( matchedRecipes.map((recipe) => {
            const isFav = favorites.some( (fav) => String(fav.id) === String(recipe.id) )
            return (
              <div key={recipe.id} className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-neutral-800 flex flex-col justify-between hover:shadow-md transition relative group">
                <div>
                  <div className="relative h-36 overflow-hidden">
                    <Link to={`/recipedetail/${recipe.id}`}>
                      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    </Link>
                    <span
                      className={`absolute bottom-2 left-2 text-white text-[10px] font-bold px-2 py-1 rounded-md ${ recipe.matchPercentage >= 80 ? "bg-[#C2410C] dark:bg-orange-600" : recipe.matchPercentage >= 50 ? "bg-amber-600" : "bg-slate-600 dark:bg-neutral-700" }`} >
                      {recipe.matchPercentage}% uyğunluq
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <Link to={`/recipedetail/${recipe.id}`}>
                      <h3 className="font-bold text-slate-800 dark:text-white text-sm hover:text-[#C2410C] dark:hover:text-orange-400 transition">
                        {recipe.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-400 dark:text-gray-400 line-clamp-1">{recipe.description}</p>
                    <div className="flex flex-wrap items-center gap-1 pt-1 text-base">
                      {(recipe.ingredientIds || []).map((ingId) => { const ing = allIngredients.find( (i) => String(i.id) === String(ingId) )
                        return ing ? (
                          <span key={ingId} title={ing.name}> {ing.emoji} </span>
                        ) : null
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 border-t border-slate-50 dark:border-neutral-800 mt-2 flex items-center justify-between text-slate-400 dark:text-gray-400 text-[11px]">
                  <span className="flex items-center gap-1"><FaClock className="text-slate-300 dark:text-gray-500" /> {recipe.time} dəq</span>
                  <span className="flex items-center gap-1">
                    <FaChartBar className="text-slate-300 dark:text-gray-500" />
                    {recipe.difficulty}
                  </span>
                  <button type="button" onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: recipe })}
                    className="hover:scale-110 transition p-1"
                    title={ isFav ? "Bəyənməni ləğv et" : "Bəyən"}>
                    {isFav ? (
                      <FaHeart className="text-rose-500 text-sm" />
                    ) : (
                      <FaRegHeart className="text-slate-400 dark:text-gray-400 hover:text-rose-500 text-sm transition" />
                    )}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full bg-white dark:bg-neutral-900 p-8 rounded-2xl text-center border border-slate-100 dark:border-neutral-800">
            <p className="text-slate-500 dark:text-gray-300 text-sm font-medium">
              Seçdiyiniz inqrediyentlərə uyğun resept tapılmadı.
            </p>
            <p className="text-slate-400 dark:text-gray-500 text-xs mt-1">
              Paneldən daha çox inqrediyent əlavə etməyə çalışın.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdviceResult