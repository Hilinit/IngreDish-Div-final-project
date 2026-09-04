import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";

const DetailHeaderInfo = ({ currentItem, isBlog, isActive, handleToggle }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100/80 dark:border-neutral-800 transition-colors">
      <div className="flex flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-neutral-800 pb-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium">
          {(currentItem?.readMinutes || currentItem?.time) && (
            <div className="flex items-center gap-1.5 bg-slate-100/70 dark:bg-neutral-800 px-3 py-1.5 rounded-xl text-slate-700 dark:text-gray-300">
              ⏱️ <span>{currentItem?.readMinutes ? `oxuma vaxtı: ${currentItem.readMinutes} dəq` : `${currentItem.time} dəq`}</span>
            </div>
          )}
          {(currentItem?.topic || currentItem?.rating) && (
            <div className="flex items-center gap-1.5 bg-orange-50 dark:bg-orange-950/40 text-[#C2410C] dark:text-orange-400 px-3 py-1.5 rounded-xl border border-orange-200/60 dark:border-orange-900/50 font-semibold">
              📌 <span>{currentItem.topic || `★ ${currentItem.rating}`}</span>
            </div>
          )}
          {(currentItem?.date || currentItem?.difficulty) && (
            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-neutral-800 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-neutral-700 text-slate-500 dark:text-gray-400">
              📅 <span>{currentItem.date || currentItem.difficulty}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleToggle}
          className={`shrink-0 p-2.5 sm:p-3 rounded-2xl font-semibold text-sm transition border cursor-pointer ${
            isActive 
              ? "bg-orange-50 dark:bg-orange-950/40 text-[#C2410C] dark:text-orange-400 border-orange-200 dark:border-orange-900/50" 
              : "bg-slate-50 hover:bg-slate-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-neutral-700"
          }`}
        >
          {isBlog ? ( 
            isActive ? <FaBookmark className="text-lg sm:text-xl text-[#C2410C] dark:text-orange-400" /> : <FaRegBookmark className="text-lg sm:text-xl"/>
          ) : (
            isActive ? <FaHeart className="text-lg sm:text-xl text-red-500" /> : <FaRegHeart className="text-lg sm:text-xl" />
          )}
        </button>
      </div>
      
      <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        {currentItem?.excerpt || currentItem?.longDescription || currentItem?.description}
      </p>
    </div>
  );
};

export default DetailHeaderInfo;