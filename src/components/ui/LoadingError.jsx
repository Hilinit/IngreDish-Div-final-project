import { Link } from "react-router-dom";

export const Error = ({ message }) => {
  return (
    <section className="mt-6 px-4 md:px-8" aria-labelledby="error-heading">
      <div className="bg-white dark:bg-neutral-900 w-full rounded-3xl max-w-4xl mx-auto p-6 md:p-8 border border-slate-100 dark:border-neutral-800 text-center transition-colors shadow-sm">
        <h2 id="error-heading" className="text-2xl text-rose-600 font-bold md:text-3xl dark:text-rose-400"> 
          Xəta Baş Verdi! 
        </h2>
        <p className="mt-4 text-base text-slate-600 leading-relaxed dark:text-gray-300">
          {message || "Məlumatları yükləyərkən gözlənilməz xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin."}
        </p>
        <Link to="/"  className="py-3 px-6 text-sm rounded-2xl font-semibold cursor-pointer text-white bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 mt-6 inline-block transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 shadow-sm">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </section>
  );
};

export const Loading = () => {
  return (
    <div role="status" className="flex items-center justify-center py-72">
      <svg  xmlns="http://www.w3.org/2000/svg"  className="w-12 h-12 shrink-0 animate-spin fill-[#C2410C] dark:fill-orange-500" viewBox="0 0 24 24"  aria-hidden="true">
        <path fillRule="evenodd"d="M12.001 5.04a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0 18.56a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm9.197-14.23a2.32 2.32 0 1 1-2.32-4.02 2.32 2.32 0 0 1 2.32 4.02zM1.956 17.8a2.32 2.32 0 1 0 4.018-2.32 2.32 2.32 0 0 0-4.018 2.32zm16.922.85a2.32 2.32 0 1 1 2.32-4.02 2.32 2.32 0 0 1-2.32 4.02zM1.956 6.2a2.32 2.32 0 1 0 4.018 2.32A2.32 2.32 0 0 0 1.956 6.2z" clipRule="evenodd" 
        />
      </svg>
      <span className="sr-only">Yüklənir…</span>
    </div>
  );
};
