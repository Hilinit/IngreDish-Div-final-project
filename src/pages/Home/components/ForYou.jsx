import Carusel from "./Carusel";
import { Loading } from "../../../components/ui/LoadingError";
import { useAppData } from "../../../hooks/useAppData";
import ForYouCard from "./ForYouCard";
import { useEffect, useState } from "react";

function ForYou() {
  const { recipes, categories, loading } = useAppData();
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const mixed = [...recipes].sort(() => 0.5 - Math.random());
      setRandomRecipes(mixed.slice(0, 8));
    }
  }, [recipes]);

  if (loading) { return <Loading />; }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6 sm:py-10 transition-colors">
      <section className="py-6 rounded-3xl p-6 sm:p-8 text-center space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white/90">Populyar Kataloqlar</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Ən çox axtarılan kulinariya kateqoriyalarını kəşf edin
          </p>
        </div>
        <Carusel categories={categories || []} />
      </section>

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Sizin üçün seçilmiş reseptlər
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Zövqünüzə və seçimlərinizə uyğun xüsusi tövsiyələr
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {randomRecipes.map((item) => (
            <ForYouCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ForYou;