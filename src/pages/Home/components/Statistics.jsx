import { IoReceiptOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { LuUsersRound } from "react-icons/lu";
import { CiStar } from "react-icons/ci";

const Statistics = () => {
  return (
    <div className="absolute bottom-0 left-[430px] md:hidden transform -translate-x-1/2 max-w-6xl mx-auto py-6 hidden lg:flex">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 px-8 py-6 md:py-8 transition-colors">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-items-center">
            <div className="flex items-center gap-4 w-full justify-center md:justify-start md:pl-6">
            <div className="text-[#C2410C] dark:text-orange-400">
            <IoReceiptOutline className="w-8 h-8" />
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">1000+</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">Resept</div>
            </div>
            </div>
                <div className="flex items-center gap-4 w-full justify-center md:justify-start   md:pl-8">
                <div className="text-[#C2410C] dark:text-orange-400">    
            <BiCategoryAlt className="w-8 h-8" />
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">Kateqoriya</div>
            </div>
            </div>
            <div className="flex items-center gap-4 w-full justify-center md:justify-start   md:pl-8">
            <div className="text-[#C2410C] dark:text-orange-400">   
            <LuUsersRound  className="w-8 h-8" />
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">İstifadəçi</div>
            </div>
            </div>
            <div className="flex items-center gap-4 w-full justify-center md:justify-start   md:pl-8">
            <div className="text-[#C2410C] dark:text-orange-400">        
                <CiStar className="w-8 h-8" />
            </div>
            <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">Reytinq</div>
            </div>
            </div>
        </div>
        </div>
        </div> 
  )
}

export default Statistics