import { SlBookOpen } from "react-icons/sl";
import { GrArticle } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";

function BottomBar() {
  const getLinkClass = ({ isActive }) =>
    `flex flex-col items-center transition ${
      isActive
        ? "text-[#C2410C] dark:text-orange-400 font-bold"
        : "text-gray-500 dark:text-gray-400 hover:text-[#C2410C] dark:hover:text-orange-400 font-medium"
    }`;

  return (
    <div className="fixed lg:hidden bottom-0 p-2 left-0 w-full bg-white dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-neutral-900 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] z-50 transition-colors">
      <div className="flex justify-around items-center h-16">
        <NavLink to="/home" className={getLinkClass}>
          <FaHouse size={22} />
          <span className="text-xs mt-1">Ana Səhifə</span>
        </NavLink>
        <NavLink to="/catalog" className={getLinkClass}>
          <SlBookOpen size={22} />
          <span className="text-xs mt-1">Kataloq</span>
        </NavLink>
        <NavLink to="/whaticook" className={getLinkClass}>
          <GiCampCookingPot size={35} />
          <span className="text-xs mt-1">Nə Bişirim?</span>
        </NavLink>
        <NavLink to="/recepies" className={getLinkClass}>
          <MdOutlineFoodBank size={30} />
          <span className="text-xs mt-1">Reseptlər</span>
        </NavLink>
        <NavLink to="/blog" className={getLinkClass}>
          <GrArticle size={22} className="dark:invert dark:opacity-75" />
          <span className="text-xs mt-1">Bloq</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomBar;