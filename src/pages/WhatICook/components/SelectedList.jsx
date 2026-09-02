

const SelectedList = ({selectedIds = [], allIngredients = [], toggleIngredient, clearAll}) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-neutral-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-slate-900 dark:text-white text-base">
          Mənim inqrediyentlərim ({selectedIds.length})
        </h2>
        {selectedIds.length > 0 && (
          <button onClick={clearAll} className="text-xs text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300 transition cursor-pointer">
            Hamısını təmizlə
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedIds.map((id) => {
          const item = allIngredients.find((i) => i.id === id);
          if (!item) return null;
          return (
            <span key={id} className="inline-flex items-center gap-2 bg-slate-100/80 dark:bg-neutral-800 text-slate-700 dark:text-gray-200 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200/60 dark:border-neutral-700">
              <span>{item.emoji}</span>
              <span>{item.name}</span>
              <button onClick={() => toggleIngredient(id)} className="text-slate-400 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 transition ml-1 cursor-pointer">
                ✕
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedList;