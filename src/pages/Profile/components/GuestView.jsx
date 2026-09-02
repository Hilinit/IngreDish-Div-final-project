import { Link } from "react-router-dom"
import { FaUserLock } from "react-icons/fa"

const GuestView = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-orange-50 dark:bg-orange-950/50 text-[#C2410C] dark:text-orange-400 rounded-2xl flex items-center justify-center text-2xl mb-4 border border-orange-100 dark:border-orange-900/50">
        <FaUserLock />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2"> Daha çox funksionallıq üçün giriş edin! </h2>
      <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
        Sevimli reseptlərinizi bəyənmək, yadda saxlamaq və fərdi siyahılarınızı idarə etmək üçün hesabınıza daxil olun.
      </p>
      <Link to="/login" className="inline-block bg-[#C2410C] dark:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-xs hover:bg-[#9A3412] dark:hover:bg-orange-500 transition shadow-md cursor-pointer">
        Daxil Ol və ya Qeydiyyatdan Keç
      </Link>
    </div>
  )
}

export default GuestView