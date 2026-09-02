import { Link } from "react-router-dom";

const Carusel = ({ categories = [] }) => {
  return (
    <section className="my-6" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-3xl p-6 sm:p-8 border border-slate-100 text-center space-y-6">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-none snap-x">
            {categories.slice(0, 7).map((cat) => (
              <Link key={cat.id || cat.title} to={`/categorydetail/${cat.id}`} className="flex flex-col items-center flex-shrink-0 group cursor-pointer snap-center w-28 sm:w-32">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white shadow-sm border border-slate-100 group-hover:border-[#C2410C] group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                  <img loading="lazy" src={cat.image || "https://via.placeholder.com/150"} alt={cat.title || cat.name} className="w-full h-full object-cover rounded-full"/>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-[#C2410C] transition-colors mt-3 text-center line-clamp-1">
                  {cat.title || cat.name}
                </p>
              </Link>
            ))}
          </div>
      </div>
    </div>
  </section>
  );
};

export default Carusel;