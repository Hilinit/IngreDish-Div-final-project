const DetailHero = ({ currentItem }) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[480px] md:h-[520px]">
      <img loading="lazy" src={currentItem?.image} alt={currentItem?.title} className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-white">
        {currentItem?.category && (
          <span className="inline-block bg-[#C2410C] dark:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
            {currentItem.categoryName}
          </span>
        )}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-sm">{currentItem?.title}</h1>
      </div>
    </div>
  );
};

export default DetailHero;