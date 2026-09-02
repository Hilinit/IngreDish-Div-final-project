import { useState } from "react";
import { FaSearch, FaLightbulb, FaCheck } from "react-icons/fa";
import Search from "../../../components/ui/Search"

const Ingredients = ({ Ingredients, selectedIds, toggleIngredient }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const INGREDIENT_CATEGORIES = [
    { "id": "all", "label": "Hamısı" },
    { "id": "meat", "label": "Ət məhsulları" },
    { "id": "ocean-food", "label": "Dəniz məhsulları" },
    { "id": "veg", "label": "Tərəvəzlər və Meyvələr" },
    { "id": "legume", "label": "Dənli bitkilər və Çərəzlər" },
    { "id": "dairy", "label": "Süd məhsulları" },
    { "id": "other", "label": "Digər Ərzaqlar" }
  ]
  const filteredIngredients = (Ingredients || []).filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="lg:col-span-5 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-neutral-800 flex flex-col justify-between space-y-6 h-fit transition-colors">
      <div>
        <h2 className="font-bold text-slate-900 dark:text-white text-base mb-4">İnqrediyent əlavə et</h2>
        <div className="relative mb-4">
          <Search search={search} setSearch={setSearch} style="w-full bg-slate-50 dark:bg-neutral-800 text-slate-900 dark:text-white border border-slate-200/80 dark:border-neutral-700 rounded-xl px-4 py-2.5 pl-4 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-[#C2410C]/25 dark:focus:ring-orange-500/25 focus:border-[#C2410C] dark:focus:border-orange-500 transition" 
            placeholder="İnqrediyent axtar..." />
          <FaSearch className="absolute right-3.5 top-3 text-slate-400 dark:text-gray-400 text-xs pointer-events-none" />
        </div>
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {INGREDIENT_CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer 
                ${ activeCategory === cat.id  ? "bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white" : "bg-slate-100/70 dark:bg-neutral-800 text-slate-500 dark:text-gray-400 hover:bg-slate-200/60 dark:hover:bg-neutral-700" }`} >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3 max-h-[380px] overflow-y-auto pr-1">
          {filteredIngredients.map((item) => {
            const isSelected = selectedIds?.includes(item.id);
            return (
              <button key={item.id} onClick={() => toggleIngredient(item.id)} className={`relative aspect-square rounded-2xl p-2 border flex flex-col items-center justify-center transition group cursor-pointer 
                  ${ isSelected ? "border-[#C2410C] dark:border-orange-500 bg-[#C2410C]/5 dark:bg-orange-950/40 shadow-sm" 
                      : "border-slate-100 dark:border-neutral-800 bg-slate-50/50 dark:bg-neutral-800/50 hover:bg-slate-100/60 dark:hover:bg-neutral-800"
                  }`}>
                {isSelected && (
                  <span className="absolute top-2 right-2 w-4 h-4 bg-[#C2410C] dark:bg-orange-500 text-white rounded-full flex items-center justify-center text-[8px]">
                    <FaCheck />
                  </span>
                )}
                <span className="text-2xl mb-1 group-hover:scale-110 transition">{item.emoji}</span>
                <span className="text-[11px] font-medium text-slate-700 dark:text-gray-300 text-center line-clamp-1">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-neutral-800/60 rounded-2xl p-4 border border-slate-100 dark:border-neutral-800 flex items-start gap-3">
        <FaLightbulb className="text-amber-500 text-lg mt-0.5 shrink-0" />
        <div>
          <h4 className="text-xs font-bold text-slate-800 dark:text-white">Məsləhət</h4>
          <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed mt-0.5">
            Ən yaxşı nəticə üçün ən az 3-4 inqrediyent seçməyinizi tövsiyə edirik.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ingredients;