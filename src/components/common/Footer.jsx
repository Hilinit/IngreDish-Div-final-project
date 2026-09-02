import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="pt-4 pb-8 px-4 md:px-8 hidden lg:block bg-white dark:bg-black/95 transition-colors border-t border-slate-100 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row flex-wrap gap-x-6 gap-y-8 text-center">
          <a href="#" className="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
            <img src='/assets/logo.png' alt="IngreDish Logo" className="h-20 w-200 lg:w-300 cursor-pointer dark:brightness-0 dark:invert object-contain"/>
          </a>
          <ul className="flex space-x-6 gap-y-4 max-lg:justify-center flex-wrap text-sm text-slate-400 dark:text-slate-400">
            <li><a href="#" className="hover:text-[#C2410C] dark:hover:text-orange-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Ana Səhifə</a></li>
            <li><a href="#" className="hover:text-[#C2410C] dark:hover:text-orange-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Reseptlər</a></li>
            <li><a href="#" className="hover:text-[#C2410C] dark:hover:text-orange-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Kataloq</a></li>
            <li><a href="#" className="hover:text-[#C2410C] dark:hover:text-orange-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Bloq</a></li>
          </ul>
        </div>
        <hr className="my-8 border-slate-200 dark:border-neutral-800" />
        <div className="flex items-center justify-between gap-6 flex-wrap flex-col md:flex-row">
          <div className="max-md:order-1">
            <p className="text-slate-400 text-sm">© IngreDish. All rights reserved. </p>
          </div>
          <ul className="flex flex-wrap gap-6">
            <li><a href="#" className="flex items-center bg-[#C2410C] dark:bg-orange-600 hover:bg-[#9A3412] dark:hover:bg-orange-500 transition w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Facebook"><FaFacebookF className="size-full fill-slate-50" /></a>
            </li>
            <li><a href="#" className="flex items-center bg-[#C2410C] dark:bg-orange-600 hover:bg-[#9A3412] dark:hover:bg-orange-500 transition w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="LinkedIn"><FaLinkedinIn className="size-full fill-slate-50"/></a>
            </li>
            <li><a href="#" className="flex items-center bg-[#C2410C] dark:bg-orange-600 hover:bg-[#9A3412] dark:hover:bg-orange-500 transition w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Instagram"><FaInstagram className="size-full fill-slate-50"/></a>
            </li>
            <li><a href="#" className="flex items-center bg-[#C2410C] dark:bg-orange-600 hover:bg-[#9A3412] dark:hover:bg-orange-500 transition w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="YouTube"><CiYoutube className="size-full fill-slate-50"/></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;