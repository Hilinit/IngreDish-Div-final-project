import { useNavigate } from "react-router-dom";

const NotFound = ({ message, to = -1 }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-36 flex flex-col items-center justify-center text-slate-600 dark:text-gray-400 gap-4 bg-gray-50 dark:bg-neutral-950 transition-colors">
      <p className="text-xl font-medium">{message}</p>
      <button onClick={() => navigate(to)} className="px-5 py-2.5 bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-semibold rounded-xl transition shadow-sm cursor-pointer" >
        Geri qayıt
      </button>
    </div>
  );
};

export default NotFound;