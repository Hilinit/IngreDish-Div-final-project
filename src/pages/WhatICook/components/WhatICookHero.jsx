import { BsStars } from "react-icons/bs";

const WhatICookHero = () => {
  return (
    <div 
      className="rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 dark:border-neutral-800 relative overflow-hidden bg-cover bg-center flex items-center transition-colors" 
      style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 55%, rgba(255, 255, 255, 0.4) 100%), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')` }} >
      <div className="absolute inset-0 bg-white/95 dark:bg-neutral-900/95 dark:backdrop-blur-sm lg:bg-gradient-to-r lg:from-white/95 lg:dark:from-neutral-900/95 lg:via-white/50 lg:dark:via-neutral-900/60 lg:to-transparent transition-colors z-0" />

      <div className="max-w-xl relative z-10 w-full space-y-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C2410C]/10 dark:bg-orange-950/60 text-[#C2410C] dark:text-orange-400 mb-2 border border-[#C2410C]/15 dark:border-orange-800/40">
           <BsStars className="inline text-xl"/>Ağıllı Mətbəx Köməkçisi
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Soyuducunda nə var? <span className="text-[#C2410C] dark:text-orange-400">Reseptini tapırıq!</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mt-1 font-medium max-w-md">
            Məhsulları sağ tərəfdən seç, əlində olanlarla hazırlaya biləcəyin ən lezzetli yeməkləri dərhal sıralayaq.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatICookHero