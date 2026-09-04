import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  const navLinks = [
    { label: "Ana Səhifə", to: "/" },
    { label: "Reseptlər", to: "/recipes" },
    { label: "Nə Bişirim?", to: "/whaticook" },
    { label: "Kataloq", to: "/catalog" },
    { label: "Bloq", to: "/blog" }
  ];

  const socialLinks = [
    { label: "Facebook", href: "#", icon: <FaFacebookF className="size-full fill-slate-50" /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedinIn className="size-full fill-slate-50" /> },
    { label: "Instagram", href: "#", icon: <FaInstagram className="size-full fill-slate-50" /> },
    { label: "YouTube", href: "#", icon: <CiYoutube className="size-full fill-slate-50" /> }
  ];

  return (
    <footer className="pt-4 pb-8 px-4 md:px-8 hidden lg:block bg-white dark:bg-black/95 transition-colors border-t border-slate-100 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row flex-wrap gap-x-6 gap-y-8 text-center">
          <NavLink to="/" className="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
            <img src='/assets/logo.png' alt="IngreDish Logo" className="h-20 w-200 lg:w-300 cursor-pointer dark:brightness-0 dark:invert object-contain"/>
          </NavLink>
          <ul className="flex space-x-6 gap-y-4 max-lg:justify-center flex-wrap text-sm text-slate-400 dark:text-slate-400">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.to} className={({ isActive }) => `transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${ isActive 
                      ? "text-[#C2410C] dark:text-orange-400 font-semibold" 
                      : "hover:text-[#C2410C] dark:hover:text-orange-400"
                  }`} >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-8 border-slate-200 dark:border-neutral-800" />
        <div className="flex items-center justify-between gap-6 flex-wrap flex-col md:flex-row">
          <div className="max-md:order-1">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} IngreDish. Bütün hüquqlar qorunur.</p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href} className="flex items-center bg-[#C2410C] dark:bg-orange-600 hover:bg-[#9A3412] dark:hover:bg-orange-500 transition w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;