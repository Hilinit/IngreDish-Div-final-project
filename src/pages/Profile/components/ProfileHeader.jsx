import { FaPen, FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const ProfileHeader = ({ user, theme, toggleTheme, handleCoverImageChange}) => {
  return (
    <>
      <div className="h-64 lg:h-96 sm:h-80 w-full bg-cover bg-center bg-no-repeat relative" style={{ 
          backgroundImage: user?.coverImage ? `url(${user.coverImage})` : `url('assets/logo.png')`, 
          backgroundSize: user?.coverImage ? "cover" : "22%" 
        }} >
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
        <div className="absolute top-6 right-4 flex items-center gap-2 z-25">
          <button onClick={toggleTheme} className="bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 text-slate-700 dark:text-slate-200 p-2.5 rounded-xl shadow-md cursor-pointer transition flex items-center justify-center backdrop-blur-sm" title="Rejimi dəyiş" >
            {theme === "light" ? <FaMoon className="text-md text-amber-500" /> : <MdLightMode className="text-md text-amber-400 font-semibold" />}
          </button>
    
          <label htmlFor="coverImageInput" className="bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 text-slate-700 dark:text-slate-200 p-2.5 rounded-xl shadow-md cursor-pointer transition flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm" title="Arxa fon şəklini dəyiş" >
            <FaPen className="text-[16px] text-[#C2410C] dark:text-orange-400" />
          </label>
        </div>
        <input type="file" id="coverImageInput" accept="image/*" onChange={handleCoverImageChange} className="hidden" />
      </div>   
    </>
  );
};

export default ProfileHeader;