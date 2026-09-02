import { CiTimer } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { IoGridOutline } from "react-icons/io5";

const RecipeFilters = ({ sortType, setSortType }) => {
  const filters = [
    { id: "all", label: "Hamısı", icon: <IoGridOutline className="inline mr-2 text-base" /> },
    { id: "popular", label: "Ən populyar", icon: <GiProgression className="inline mr-2 text-base" /> },
    { id: "time", label: "Hazırlama vaxtı", icon: <CiTimer className="inline mr-2 text-base" /> },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {filters.map((filter) => {
        const isActive = sortType === filter.id;

        return (
          <button key={filter.id} type="button" onClick={() => setSortType(filter.id)} className={`px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-full border transition-all duration-200 text-sm font-medium cursor-pointer 
            ${ isActive ? "bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white border-[#C2410C] dark:border-orange-600 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-800 hover:border-[#C2410C] dark:hover:border-orange-500"
            }`}>
            {filter.icon}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default RecipeFilters;