import { Link } from "react-router-dom";

const RelatedItems = ({ items, isBlog }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="pt-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        {isBlog ? "Oxşar Məqalələr" : "Bunları da bəyənə bilərsən"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link 
            to={`/${isBlog ? "blogdetail" : "recipedetail"}/${item.id}`} 
            key={item.id} 
            className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-neutral-800 hover:shadow-md transition group block"
          >
            <div className="relative h-48 overflow-hidden">
              <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-[#C2410C] dark:group-hover:text-orange-400 transition line-clamp-1">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs mt-1 line-clamp-2">
                {item.excerpt || item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;