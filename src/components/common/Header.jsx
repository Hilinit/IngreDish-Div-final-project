import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { user, isLoggedIn } = useAuth();
  const avatarSrc = (!user?.isGuest && isLoggedIn && user?.avatar)  ? user.avatar  : "https://i.pinimg.com/736x/4d/68/ec/4d68eca5e68d4141861e00aa728a73fc.jpg"
  const displayName = (!user?.isGuest && isLoggedIn && user?.name) ? user.name : "Profile";

  const getNavLinkClass = ({ isActive }) => 
    `mt-2 transition ${ isActive ? "border-[#C2410C] text-[#C2410C] dark:text-orange-400 dark:border-orange-400 font-bold" : " hover:border-[#C2410C] hover:text-[#C2410C] text-gray-700 dark:text-white/70" }`

  return (
    <div className="flex fixed z-50 items-center justify-between px-5 lg:px-10 py-2 bg-white dark:bg-[#0d0d0d] shadow-md w-[100%]">
      <NavLink to='/home' className="flex items-center">
        <img src='assets/logo.png' alt="IngreDish Logo" className="h-20 w-200 lg:w-300 cursor-pointer hidden lg:flex dark:brightness-0 dark:invert object-contain" />
        <img src='/favicon.ico' alt="IngreDish Logo" className="h-[60px] w-[60px] lg:w-300 cursor-pointer flex lg:hidden object-contain dark:brightness-0 dark:invert" />
      </NavLink>
      <div className="hidden lg:flex justify-items-center space-x-4 cursor-pointer">
        <div className="flex space-x-4 font-semibold text-gray-700 dark:text-white/70">
          <NavLink to='/home' className={getNavLinkClass}> Ana Səhifə </NavLink>
          <NavLink to='/whaticook'>
            {({ isActive }) => (
              <button className={`px-6 py-3 rounded-lg shadow-md transition ${isActive ? 'bg-[#9A3412] text-white' : 'bg-[#C2410C] text-white dark:text-white/70 hover:bg-[#9A3412]'}`}>
                Nə bişirim?
              </button>
            )}
          </NavLink>
          <NavLink to='/recepies' className={getNavLinkClass}> Reseptlər </NavLink>
          <NavLink to='/catalog' className={getNavLinkClass}> Kataloq </NavLink>
          <NavLink to='/blog' className={getNavLinkClass}> Bloq </NavLink>
        </div>
      </div>

      <NavLink to="/profile" className="flex items-center gap-2.5 group">
        <div className="flex items-center gap-2 font-semibold cursor-pointer pr-1">
          <img 
            alt="Profile" src={avatarSrc} className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover border-2 border-slate-200 dark:border-neutral-800 group-hover:border-[#C2410C] dark:group-hover:border-orange-500 transition shadow-sm" />
          <span className="hidden lg:inline text-sm text-slate-700 dark:text-slate-200 group-hover:text-[#C2410C] dark:group-hover:text-orange-400 transition"> 
            {displayName} 
          </span>
        </div>
      </NavLink>
    </div>
  )
}

export default Header;