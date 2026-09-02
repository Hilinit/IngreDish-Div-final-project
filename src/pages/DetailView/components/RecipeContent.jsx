import { useState, useEffect } from "react";

const RecipeContent = ({ recipe }) => {
  const [servings, setServings] = useState(recipe?.servings || 1);
  useEffect(() => { if (recipe?.servings) { setServings(recipe.servings) } }, [recipe]);

  const calculateAmount = (baseAmount) => {
    if (!recipe?.servings) return baseAmount;
    return ((baseAmount / recipe.servings) * servings).toFixed(baseAmount % 1 === 0 ? 0 : 1)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5 bg-white dark:bg-neutral-900 p-5 sm:p-7 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800 h-fit transition-colors">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">İnqrediyentlər</h2>
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-neutral-800 px-3 py-1.5 rounded-2xl">
            <button onClick={() => setServings(Math.max(1, servings - 1))} className="w-7 h-7 rounded-xl bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center font-bold text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-neutral-600 transition cursor-pointer" >
              -
            </button>
            <span className="text-xs font-bold text-slate-800 dark:text-gray-200">{servings} nəfərlik</span>
            <button onClick={() => setServings(servings + 1)} className="w-7 h-7 rounded-xl bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center font-bold text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-neutral-600 transition cursor-pointer" >
              +
            </button>
          </div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-neutral-800">
          {recipe?.ingredientsDetailed?.map((item, idx) => (
            <div key={idx} className="py-3 flex items-center justify-between text-sm">
              <span className="text-slate-700 dark:text-gray-300 font-medium">{item.name}</span>
              <span className="font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-neutral-800 px-2.5 py-1 rounded-lg border border-slate-100 dark:border-neutral-700">
                {calculateAmount(item.amount)} {item.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-7 bg-white dark:bg-neutral-900 p-5 sm:p-7 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Hazırlanma qaydası</h2>
        <div className="space-y-3.5">
          {recipe?.steps?.map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 dark:bg-neutral-800/50 border border-slate-100 dark:border-neutral-800 flex items-start gap-4 transition hover:bg-slate-50 dark:hover:bg-neutral-800" >
              <span className="w-8 h-8 rounded-xl bg-[#C2410C] dark:bg-orange-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm shadow-orange-900/10">
                {idx + 1}
              </span>
              <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed pt-0.5 font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeContent;