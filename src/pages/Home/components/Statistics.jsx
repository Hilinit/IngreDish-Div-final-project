import { IoReceiptOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { LuUsersRound } from "react-icons/lu";
import { CiStar } from "react-icons/ci";

const Statistics = () => {
  const stats = [
    { id: 1, icon: <IoReceiptOutline className="w-7 h-7 sm:w-8 sm:h-8" />, value: "1000+", label: "Resept" },
    { id: 2, icon: <BiCategoryAlt className="w-7 h-7 sm:w-8 sm:h-8" />, value: "50+", label: "Kateqoriya" },
    { id: 3, icon: <LuUsersRound className="w-7 h-7 sm:w-8 sm:h-8" />, value: "10K+", label: "İstifadəçi" },
    { id: 4, icon: <CiStar className="w-7 h-7 sm:w-8 sm:h-8" />, value: "4.9", label: "Reytinq" },
  ];

  return (
    <div className="w-full lg:w-auto lg:absolute lg:bottom-6 lg:left-6 xl:left-20 z-20">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-orange-950/10 dark:border-neutral-800 px-4 sm:px-6 py-4 md:py-5 transition-colors w-full lg:w-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center lg:justify-items-start">
          {stats.map((item) => (
            <div key={item.id} className="flex items-center gap-3 w-full justify-start">
              <div className="text-[#C2410C] dark:text-orange-400 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">{item.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;