import { SlBookOpen } from "react-icons/sl";
import { GrArticle } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/home", label: "Ana Səhifə", icon: <FaHouse size={22} /> },
  { to: "/catalog", label: "Kataloq", icon: <SlBookOpen size={22} /> },
  { to: "/whaticook", label: "Nə Bişirim?", icon: <GiCampCookingPot size={35} /> },
  { to: "/recepies", label: "Reseptlər", icon: <MdOutlineFoodBank size={30} /> },
  { to: "/blog", label: "Bloq", icon: <GrArticle size={22} /> },
];

function BottomBar() {
  const LinkClass = ({ isActive }) =>
    `flex flex-col items-center transition ${
      isActive
        ? "text-[#C2410C] dark:text-orange-400 font-bold"
        : "text-gray-500 dark:text-gray-400 hover:text-[#C2410C] dark:hover:text-orange-400 font-medium"
    }`;

  return (
    <div className="fixed lg:hidden bottom-0 p-2 left-0 w-full bg-white dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-neutral-900 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] z-50 transition-colors">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={LinkClass}>
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BottomBar;