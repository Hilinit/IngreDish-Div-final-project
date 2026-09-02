<>

<div
   className="grid items-start bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden sm:grid-cols-2 sm:max-w-2xl dark:bg-neutral-800 dark:border-neutral-700">
   <div className="aspect-[26/22] w-full bg-gray-50 dark:bg-neutral-700">
      <img src={featured.image} className="w-full h-full object-cover" alt={featured.title} />
   </div>

   <div className="p-4 sm:p-6">
      <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">{featured.title} </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400"> {featured.description}</p>

      <div classNameName="text-sm text-gray-500 font-medium flex items-center gap-1.5 mt-2">
                  <CiAlarmOn size={16} classNameName="text-[#3c4f21] shrink-0" /> 
                  <span>{featured.time} dəq</span>
                  <span>·</span>
                  <span>{featured.difficulty}</span>
      </div>
   </div>
</div>


//-------------------------------
<article to='' key={item.id} 
            class="block rounded-lg overflow-hidden relative group before:absolute before:inset-0 before:z-10 before:bg-black/20">
            <div class="w-full aspect-[119/128]">
            <NavLink to="" rel="noopener noreferrer" aria-label={item.title}> 
               <img src={item.image} alt={item.title}
                  class="w-full h-full object-cover" />
               </NavLink>
            </div>
            <div class="px-6 py-4 absolute bottom-0 left-0 right-0 bg-white/80 z-10">
               <span class="text-sm block text-slate-600 font-medium mb-2">Çətinlik: {item.difficulty} |<FaStar className="inline text-yellow-500 text-lg pb-1"/> {item.rating} reytinq </span>
               <h3 class="text-lg font-semibold text-slate-900 line-clamp-1">{item.title}</h3>
               <div class="h-0 overflow-hidden group-hover:h-[75px] group-hover:mt-4 transition-all duration-300">
                  <p class="text-slate-600 text-base leading-relaxed line-clamp-3">{item.description}</p>
               </div>
            </div>
         </article>



//=====================Resipi cards===================================
<article key={item.id} className="bg-white flex flex-col shadow-md rounded-lg overflow-hidden transition-all hover:shadow-lg duration-300 hover:scale-105">
               <NavLink to="" rel="noopener noreferrer" aria-label={item.title}>
                 <img alt={item.title} className="w-full h-52 object-cover" src={item.image} />
               </NavLink>
               <div className="flex flex-col flex-1 p-6">
                 <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                   {item.category || "Resept"}
                 </span>
                 <h3 className="text-lg font-semibold leading-snug text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-sm text-gray-600 flex-1 line-clamp-3 mb-4">
                     {item.description}
                   </p>
                   <div className="flex flex-wrap justify-between pt-3 gap-1 border-t border-gray-100 text-xs text-gray-600">
                     <span>Çətinlik: {item.difficulty}</span>
                     <span><FaStar className="inline text-yellow-500 text-lg pb-1"/> {item.rating} reytinq</span>
                   </div>
                 </div>
               </article>


/***********************************WhatICook************************************************************ */


import { useState } from "react";
import {
  FaSearch,
  // FaTrashAlt,
  FaClock,
  FaChartBar,
  FaBookmark,
  FaLightbulb,
  FaCheck,
  FaPlus,
} from "react-icons/fa";

// Nümunə İnqrediyentlər Siyahısı
const ALL_INGREDIENTS = [
  { id: "toyuq", name: "Toyuq əti", category: "Ət mahsulları", icon: "🍗" },
  { id: "mal", name: "Mal əti", category: "Ət mahsulları", icon: "🥩" },
  { id: "baliq", name: "Balıq", category: "Ət mahsulları", icon: "🐟" },
  { id: "yumurta", name: "Yumurta", category: "Ət mahsulları", icon: "🥚" },
  { id: "kartof", name: "Kartof", category: "Tərəvəzlər", icon: "🥔" },
  { id: "pomidor", name: "Pomidor", category: "Tərəvəzlər", icon: "🍅" },
  { id: "sogan", name: "Soğan", category: "Tərəvəzlər", icon: "🧅" },
  { id: "sarimsaq", name: "Sarımsaq", category: "Tərəvəzlər", icon: "🧄" },
  { id: "kok", name: "Kök", category: "Tərəvəzlər", icon: "🥕" },
  { id: "biber", name: "Bibər", category: "Tərəvəzlər", icon: "🫑" },
  { id: "xiyar", name: "Xiyar", category: "Tərəvəzlər", icon: "🥒" },
  { id: "badimcan", name: "Badımcan", category: "Tərəvəzlər", icon: "🍆" },
  { id: "pendir", name: "Pendir", category: "Süd məhsulları", icon: "🧀" },
  { id: "sud", name: "Süd", category: "Süd məhsulları", icon: "🥛" },
  { id: "qatiq", name: "Qatıq", category: "Süd məhsulları", icon: "🥣" },
  { id: "makaron", name: "Makaron", category: "Digər", icon: "🍝" },
  { id: "duyu", name: "Düyü", category: "Baklagiller", icon: "🍚" },
  { id: "noxud", name: "Noxud", category: "Baklagiller", icon: "🧆" },
  { id: "merci", name: "Mərci", category: "Baklagiller", icon: "🥣" },
  { id: "goyerti", name: "Göyərti", category: "Tərəvəzlər", icon: "🌿" },
];

const WhatICook = () => {
  const [selectedIds, setSelectedIds] = useState([
    "toyuq",
    "kartof",
    "pomidor",
    "sogan",
    "sarimsaq",
  ]);
  const [activeCategory, setActiveCategory] = useState("Hamısı");
  const [searchTerm, setSearchTerm] = useState("");

  // İnqrediyent seçmə/çıxarma funksiyası
  const toggleIngredient = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const clearAll = () => setSelectedIds([]);

  // Filter olunmuş inqrediyentlər (axtarış və kateqoriyaya görə)
  const filteredIngredients = ALL_INGREDIENTS.filter((item) => {
    const matchesCategory =
      activeCategory === "Hamısı" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
   <div className="pt-36">
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 lg:p-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ================= SOL PANEL (7 kolonka) ================= */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Hero Banner */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 flex items-center justify-between relative overflow-hidden">
            <div className="max-w-xs z-10">
              <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Məndə bunlar var, <br />
                <span className="text-slate-800">nə bişirim? 👨‍🍳</span>
              </h1>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Soyuducundakı inqrediyentləri seç və sənə uyğun reseptlər təklif
                edək.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <button className="bg-[#3D4D21] hover:bg-[#2d3a18] text-white px-5 py-3 rounded-2xl font-semibold text-sm transition flex items-center gap-2 shadow-md shadow-emerald-900/10">
                  Mənə resept təklif et ✨
                </button>
                <button
                  onClick={clearAll}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-3 rounded-2xl font-semibold text-sm transition"
                >
                  Təmizlə
                </button>
              </div>
            </div>

            {/* Banner Görseli (İllüstrasiya / Şəkil) */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                alt="Vegetables Basket"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Mənim İnqrediyentlərim Bölməsi */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900 text-base">
                Mənim inqrediyentlərim
              </h2>
              {selectedIds.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-slate-400 hover:text-slate-600 transition"
                >
                  Hamısını göstər
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedIds.map((id) => {
                const item = ALL_INGREDIENTS.find((i) => i.id === id);
                if (!item) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200/60"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <button
                      onClick={() => toggleIngredient(id)}
                      className="text-slate-400 hover:text-rose-500 transition ml-1"
                    >
                      ✕
                    </button>
                  </span>
                );
              })}

              <button className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 px-3 py-2 rounded-xl text-xs font-medium border border-dashed border-slate-300 transition">
                <FaPlus className="text-[10px]" /> Əlavə et
              </button>
            </div>
          </div>

          {/* Sizə Uyğun Reseptlər */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Sizə uyğun reseptlər
              </h2>
              <button className="text-xs text-slate-400 flex items-center gap-1 hover:text-slate-600">
                <span>💬</span> Neçə işləyir?
              </button>
            </div>

            {/* Resept Kartları Grid-i */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative h-36">
                    <img
                      src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80"
                      alt="Sobada toyuq"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#2D5A27] text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      98% uyğunluq
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm">
                      Sobada toyuq və kartof
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      Dadı damağınızda qalacaq klassik resept.
                    </p>
                    <div className="flex items-center gap-1 pt-1 text-base">
                      <span>🍗</span> <span>🥔</span> <span>🍅</span> <span>🧅</span> <span>🧄</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 border-t border-slate-50 mt-2 flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-slate-300" /> 45 dəq
                  </span>
                  <span className="flex items-center gap-1">
                    <FaChartBar className="text-slate-300" /> Orta
                  </span>
                  <button className="hover:text-amber-500 transition">
                    <FaBookmark />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative h-36">
                    <img
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80"
                      alt="Toyuqlu tərəvəz şorbası"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#2D5A27] text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      85% uyğunluq
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm">
                      Toyuqlu tərəvəz şorbası
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      Yüngül və sağlam seçim.
                    </p>
                    <div className="flex items-center gap-1 pt-1 text-base">
                      <span>🍗</span> <span>🥔</span> <span>🍅</span> <span>🥕</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 border-t border-slate-50 mt-2 flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-slate-300" /> 40 dəq
                  </span>
                  <span className="flex items-center gap-1">
                    <FaChartBar className="text-slate-300" /> Asan
                  </span>
                  <button className="hover:text-amber-500 transition">
                    <FaBookmark />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="relative h-36">
                    <img
                      src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=80"
                      alt="Toyuqlu güveç"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      70% uyğunluq
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm">
                      Toyuqlu güveç
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      Sadə inqredientlə möhtəşəm dad.
                    </p>
                    <div className="flex items-center gap-1 pt-1 text-base">
                      <span>🍗</span> <span>🥔</span> <span>🍅</span> <span>🧄</span>{" "}
                      <span className="text-xs text-slate-400 font-medium">+2</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 border-t border-slate-50 mt-2 flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-slate-300" /> 60 dəq
                  </span>
                  <span className="flex items-center gap-1">
                    <FaChartBar className="text-slate-300" /> Orta
                  </span>
                  <button className="hover:text-amber-500 transition">
                    <FaBookmark />
                  </button>
                </div>
              </div>
            </div>

            {/* Daha Çox Resept Göstər Button */}
            <div className="text-center pt-2">
              <button className="text-slate-500 hover:text-slate-800 font-semibold text-xs inline-flex items-center gap-1 transition">
                Daha çox resept göstər ∨
              </button>
            </div>
          </div>
        </div>

        {/* ================= SAĞ PANEL (5 kolonka) ================= */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between space-y-6">
          <div>
            {/* Header / Axtarış */}
            <h2 className="font-bold text-slate-900 text-base mb-4">
              İnqrediyent əlavə et
            </h2>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="İnqrediyent axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5 pl-4 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              />
              <FaSearch className="absolute right-3.5 top-3 text-slate-400 text-xs" />
            </div>

            {/* Kateqoriya Filtrləri (Tabs) */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-4 scrollbar-none">
              {[
                "Hamısı",
                "Ət mahsulları",
                "Tərəvəzlər",
                "Baklagiller",
                "Süd məhsulları",
                "Digər",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                    activeCategory === cat
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100/70 text-slate-500 hover:bg-slate-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* İnqrediyentlər Grid-i */}
            <div className="grid grid-cols-4 gap-3">
              {filteredIngredients.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleIngredient(item.id)}
                    className={`relative aspect-square rounded-2xl p-2 border flex flex-col items-center justify-center transition group ${
                      isSelected
                        ? "border-[#2D5A27] bg-[#2D5A27]/5 shadow-sm"
                        : "border-slate-100 bg-slate-50/50 hover:bg-slate-100/60"
                    }`}
                  >
                    {/* Seçilibsə Yaşıl Icon */}
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-4 h-4 bg-[#2D5A27] text-white rounded-full flex items-center justify-center text-[8px]">
                        <FaCheck />
                      </span>
                    )}

                    <span className="text-2xl mb-1 group-hover:scale-110 transition">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-medium text-slate-700 text-center line-clamp-1">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Məsləhət Qutusu (Footer) */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3">
            <FaLightbulb className="text-amber-500 text-lg mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-800">Məsləhət</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                Ən yaxşı nəticə üçün ənn az 3-4 inqrediyent seçməyinizi tövsiyə
                edirik.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default WhatICook

</>



/*****************************************************************************************************/




import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { INGREDIENTS } from "../provider/data/ingredients";
import Ingredients from "../components/sections/Ingredients";
import AdviceResult from "../components/sections/AdviceResult";

const WhatICook = () => {
 
const [selectedIds, setSelectedIds] = useState([ "toyuq", "kartof", "pomidor", "sogan", "sarimsaq"]);

  const clearAll = () => setSelectedIds([]);
  const toggleIngredient = (id) => {
    if (selectedIds.includes(id)) {setSelectedIds(selectedIds.filter((item) => item !== id))} 
    else {setSelectedIds([...selectedIds, id])}
  };
 
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-36 px-4 pb-4 w-full">
      {/* max-w-7xl silindi, tam ekrana yayılması üçün w-full tətbiq edildi */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">    
        {/* ================= SOL PANEL (7 kolonka) ================= */}
        <div className="lg:col-span-7 space-y-3">
          {/* Hero Banner - Şəkil BG Olaraq Verildi */}
          <div className="rounded-3xl p-6 lg:p-10 shadow-sm border border-slate-100 relative overflow-hidden bg-cover bg-center min-h-[260px] flex items-center"style={{backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 45%, rgba(255, 255, 255, 0.4) 100%), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')`}}>
            <div className="max-w-md z-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Məndə bunlar var, <br />
                <span className="text-slate-800">nə bişirim? 👨‍🍳</span>
              </h1>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed font-medium">
                Soyuducundakı inqrediyentləri seç və sənə uyğun reseptlər təklif edək.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <button className="bg-[#3D4D21] hover:bg-[#2d3a18] text-white px-5 py-3 rounded-2xl font-semibold text-sm transition flex items-center gap-2 shadow-md shadow-emerald-900/10">
                  Mənə resept təklif et ✨
                </button>
                <button onClick={clearAll} className="bg-white/80 hover:bg-white text-slate-700 px-4 py-3 rounded-2xl font-semibold text-sm transition border border-slate-200/60 shadow-sm">
                  Təmizlə
                </button>
              </div>
            </div>
          </div>

          {/* Mənim İnqrediyentlərim Bölməsi */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900 text-base">Mənim inqrediyentlərim</h2>
              {selectedIds.length > 0 && (
                <button onClick={clearAll} className="text-xs text-slate-400 hover:text-slate-600 transition">
                  Hamısını göstər
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedIds.map((id) => {
                const item = INGREDIENTS.find((i) => i.id === id);
                if (!item) return null;
                return (
                  <span key={id} className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200/60" >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <button onClick={() => toggleIngredient(id)} className="text-slate-400 hover:text-rose-500 transition ml-1"> ✕ </button>
                  </span>
                );
              })}

              <button className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 px-3 py-2 rounded-xl text-xs font-medium border border-dashed border-slate-300 transition">
                <FaPlus className="text-[10px]" /> Əlavə et
              </button>
            </div>
          </div>

         <AdviceResult />
        </div>

        <Ingredients />
        

      </div>
    </div>
  );
};

export default WhatICook;





/**************************************************************** */


// en alt
import { LuWandSparkles, LuBookOpenText, LuZap, LuHeart } from "react-icons/lu";
const FEATURES = [
  { icon: LuZap, title: "Sadə və sürətli", subtitle: "3 addımda resept hazırdır" },
  { icon: LuBookOpenText, title: "Minlərlə resept", subtitle: "Hər zövqə uyğun seçim" },
  { icon: LuWandSparkles, title: "Ağıllı təkliflər", subtitle: "Ən uyğun reseptləri tap" },
  { icon: LuHeart, title: "Sevdiklərin yadda qalır", subtitle: "Sevimlilərə əlavə et" },
];
<div className="grid grid-cols-2 sm:grid-cols-4 pt-8">
          {FEATURES.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex flex-col items-center text-center gap-">
            <span className="w-12 h-12 rounded-2xl bg-[#3D4D21]/10 text-[#3D4D21] flex items-center justify-center">
              <Icon size={22} />
            </span>
            <p className="text-sm font-bold text-slate-800">{title}</p>
            <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
          </div>
        ))}
        </div>


//********************************************************************************************** */




import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://69c53df08a5b6e2dec2c09e9.mockapi.io",
  headers: { "Content-Type": "application/json"}
})

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("app_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => { return localStorage.getItem("isLoggedIn") === "true"});
  const [viewsCount, setViewsCount] = useState(() => { return Number(localStorage.getItem("viewsCount")) || 0 });

  useEffect(() => {
    if (user) { localStorage.setItem("app_user", JSON.stringify(user)) } 
    else { localStorage.removeItem("app_user")}
  }, [user]);

  useEffect(() => { localStorage.setItem("isLoggedIn", isLoggedIn) }, [isLoggedIn]);

  const login = async (userData) => {
    try {
      const now = new Date().toISOString();

      const payload = { 
        ...userData, 
        avatar: userData?.avatar || user?.avatar || "", 
        coverImage: userData?.coverImage || user?.coverImage || "", 
        createdAt: userData?.createdAt || now, 
        lastLogin: now, 
        isGuest: false 
      };

      const response = await api.post("/users", payload);
      
      setUser(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("API-yə yazılarkən xəta baş verdi:", error);
      const now = new Date().toISOString();
      setUser({ ...userData, lastLogin: now, isGuest: false });
      setIsLoggedIn(true);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      if (user?.id) {
        const response = await api.put(`/users/${user.id}`, updatedData);
        setUser(response.data);
      } else {
        setUser((prevUser) => {
          if (!prevUser) return null;
          return { ...prevUser, ...updatedData };
        });
      }
    } catch (error) {
      console.error("Profil yenilənərkən xəta baş verdi:", error);
      setUser((prevUser) => {
        if (!prevUser) return null;
        return { ...prevUser, ...updatedData };
      });
    }
  };

  const loginAsGuest = () => {
    const guestUser = {
      name: "Qonaq İstifadəçi",
      isGuest: true,
    };

    setUser(guestUser);
    setIsLoggedIn(false);
  };

  const logout = () => { 
    setUser(null); 
    setIsLoggedIn(false); 
    localStorage.clear();
    window.location.reload();
  };

  const incrementViews = (pageKey) => {
    if (!pageKey) return;
    const hasViewed = localStorage.getItem(`viewed_${pageKey}`);
    if (hasViewed) return;
    localStorage.setItem(`viewed_${pageKey}`, "true");
    setViewsCount((prev) => {
      const updated = Number(prev || 0) + 1;
      localStorage.setItem("viewsCount", updated);
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, login, loginAsGuest, logout, viewsCount, incrementViews, updateUser }} >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};



/// last auth 


import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// --- CLOUDINARY AYARLARI ---
const CLOUDINARY_CLOUD_NAME = "atxbjlpo"; 
const CLOUDINARY_UPLOAD_PRESET = "my_default";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const api = axios.create({
  baseURL: "https://69c53df08a5b6e2dec2c09e9.mockapi.io",
  headers: { "Content-Type": "application/json" }
});

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("app_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [viewsCount, setViewsCount] = useState(() => {
    return Number(localStorage.getItem("viewsCount")) || 0;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("app_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("app_user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  // Şəkilləri Cloudinary-yə yükləyib qısa link alan ümumi funksiya
  const uploadImageToCloudinary = async (base64String) => {
    if (!base64String || typeof base64String !== "string" || !base64String.startsWith("data:image")) {
      return base64String; 
    }

    try {
      const formData = new FormData();
      formData.append("file", base64String);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url; // Qısa URL
    } catch (error) {
      console.error("Cloudinary yükləmə xətası:", error);
      return base64String; 
    }
  };

  const login = async (userData) => {
    try {
      const now = new Date().toISOString();
      
      // Avatar və coverImage üçün base64 yoxlanışı və Cloudinary yüklənməsi
      let lastAvatar = userData?.avatar || "";
      if (lastAvatar.startsWith("data:image")) {
        lastAvatar = await uploadImageToCloudinary(lastAvatar);
      }

      let lastCover = userData?.coverImage || "";
      if (lastCover.startsWith("data:image")) {
        lastCover = await uploadImageToCloudinary(lastCover);
      }

      const payload = { 
        ...userData, 
        avatar: lastAvatar, 
        coverImage: lastCover, // Artıq banner də qısa link olacaq
        createdAt: userData?.createdAt || now, 
        lastLogin: now, 
        isGuest: false 
      };

      const response = await api.post("/users", payload);
      
      setUser(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Giriş zamanı xəta baş verdi:", error);
      const now = new Date().toISOString();
      setUser({ ...userData, lastLogin: now, isGuest: false });
      setIsLoggedIn(true);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      let dataToUpdate = { ...updatedData };

      // Profil yenilənərkən avatar dəyişibsə
      if (dataToUpdate.avatar && dataToUpdate.avatar.startsWith("data:image")) {
        dataToUpdate.avatar = await uploadImageToCloudinary(dataToUpdate.avatar);
      }

      // Profil yenilənərkən coverImage dəyişibsə
      if (dataToUpdate.coverImage && dataToUpdate.coverImage.startsWith("data:image")) {
        dataToUpdate.coverImage = await uploadImageToCloudinary(dataToUpdate.coverImage);
      }

      if (user?.id) {
        const response = await api.put(`/users/${user.id}`, dataToUpdate);
        setUser(response.data);
      } else {
        setUser((prevUser) => {
          if (!prevUser) return null;
          return { ...prevUser, ...dataToUpdate };
        });
      }
    } catch (error) {
      console.error("Profil yenilənərkən xəta baş verdi:", error);
      setUser((prevUser) => {
        if (!prevUser) return null;
        return { ...prevUser, ...updatedData };
      });
    }
  };

  const loginAsGuest = () => {
    const guestUser = {
      name: "Qonaq İstifadəçi",
      isGuest: true,
    };

    setUser(guestUser);
    setIsLoggedIn(false);
  };

  const logout = () => { 
    setUser(null); 
    setIsLoggedIn(false); 
    localStorage.clear();
    window.location.reload();
  };

  const incrementViews = (pageKey) => {
    if (!pageKey) return;
    const hasViewed = localStorage.getItem(`viewed_${pageKey}`);
    if (hasViewed) return;
    localStorage.setItem(`viewed_${pageKey}`, "true");
    setViewsCount((prev) => {
      const updated = Number(prev || 0) + 1;
      localStorage.setItem("viewsCount", updated);
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, login, loginAsGuest, logout, viewsCount, incrementViews, updateUser }} >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};



/*********************************************************************************** */


import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaYoutube } from "react-icons/fa";
import { useAppData } from "../../hooks/useAppData";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";
import { useBookmarks } from "../../context/BookmarksContext";
import { Loading } from "../../components/ui/LoadingError";
import NotFound from "../NotFound";
import BlogContent from "./components/BlogContent";
import RecipeContent from "./components/RecipeContent";
import DetailHeaderInfo from "./components/DetailHeaderInfo";
import DetailVideoPlayer from "./components/DetailVideoPlayer";
import RelatedItems from "./components/RelatedItems";
import DetailHero from "./components/DetailHero";


const DetailView = ({ isBlog = false }) => {
  const { recipes, blogs, loading } = useAppData();
  const { id } = useParams();
  const { incrementViews } = useAuth();
  const { favorites, dispatch: favoriteDispatch } = useFavorites();
  const { bookmarks, dispatch: bookmarkDispatch } = useBookmarks();

  const DATA = isBlog ? blogs : recipes;
  
  const currentItem = DATA.find((item) => String(item.id).trim() === String(id).trim()) || DATA[0];
  const relatedItems = DATA.filter((item) => item.category === currentItem?.category && String(item.id) !== String(currentItem?.id));
  
  const isActive = isBlog ? bookmarks.some((b) => String(b.id) === String(currentItem?.id)) : favorites.some((f) => String(f.id) === String(currentItem?.id));

  const handleToggle = (e) => {
    e.preventDefault();
    if (!currentItem) return;
    if (isBlog) { bookmarkDispatch({ type: "TOGGLE_BOOKMARK", payload: currentItem }) } 
    else { favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: currentItem }) }
  };

  useEffect(() => {
    if (currentItem?.id) {
      const pageKey = `${isBlog ? "blog" : "recipe"}_${currentItem.id}`;
      incrementViews(pageKey);
    }
  }, [currentItem?.id, isBlog]);

  if (loading) { return <Loading />; }
  if (!DATA ) { return ( <NotFound message={isBlog ? "Bloq tapılmadı" : "Resept tapılmadı"} to={isBlog ? "/blog" : "/recipes"} /> ) }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-neutral-950 text-slate-800 dark:text-gray-100 pb-16 pt-24 w-full transition-colors">
      
      <DetailHero currentItem={currentItem} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-8 relative z-10 space-y-6">
        {/* Detal məlumat və düymə komponenti */}
        <DetailHeaderInfo currentItem={currentItem}  isBlog={isBlog}  isActive={isActive}  handleToggle={handleToggle} />
        {/* Məzmun */}
        {isBlog ? <BlogContent blog={currentItem} /> : <RecipeContent recipe={currentItem} />}
        {/* Video Pəncərəsi */}
        <DetailVideoPlayer isBlog={isBlog} embedUrl={currentItem?.embedUrl} title={currentItem?.title} />
        {/* Oxşar Məhsullar */}
        <RelatedItems items={relatedItems} isBlog={isBlog} />
      </div>
    </div>
  );
};

export default DetailView;