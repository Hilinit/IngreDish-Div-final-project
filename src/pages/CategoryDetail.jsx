import { useParams, useNavigate } from "react-router-dom";
// import { CATEGORIES } from "../provider/data/categories";
// import { RECIPES } from "../provider/data/recipes";
import DetailLayout from "../components/ui/DetailLayout";
import { FaBackward } from "react-icons/fa"
import { transformToDetailLayout } from "../hooks/useAppData";
import { useAppData } from "../hooks/useAppData";
import { Loading } from "../components/ui/LoadingError";
import NotFound from "./NotFound";

export default function CategoryDetail() {
  const { recipes, categories, loading } = useAppData()
  const { id } = useParams();
  const navigate = useNavigate();
  const category = (categories || []).find((c) => String(c.id) === String(id));
  const categoryRecipes = (recipes || []).filter((r) => String(r.category) === String(id));
  const formattedCategoryRecipes = transformToDetailLayout(categoryRecipes, "recipe");

  if (loading) { return <Loading/> }
  if (!category) { return ( <NotFound message="Kateqoriya tapılmadı."  to="/recepies" /> ) }

  return (
    <div className="pt-36 pb-16 bg-gray-50 dark:bg-neutral-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="flex items-center justify-between border-b pb-6 border-slate-200 dark:border-neutral-800">
          <div className="flex items-center space-x-4">
            <span className="text-4xl sm:text-5xl">{category.icon || "🍽️"}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">{category.name}</h1>
              <p className="text-slate-500 dark:text-gray-400 text-sm font-medium mt-1">
                Cəmi {categoryRecipes.length} ləzzətli resept tapıldı
              </p>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-neutral-700 rounded-xl text-slate-600 dark:text-gray-300 font-semibold text-sm hover:bg-white dark:hover:bg-neutral-900 hover:border-[#C2410C] dark:hover:border-orange-500 hover:text-[#C2410C] dark:hover:text-orange-400 transition shadow-sm cursor-pointer" title="Əvvəlki səhifəyə qayıt" aria-label="go to back button">
            <FaBackward />
          </button>
        </div>
        <DetailLayout data={formattedCategoryRecipes} title={category.name}/>
      </div>
    </div>
  );
}