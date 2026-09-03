import { useNavigate } from "react-router-dom";

const Category = ({ data }) => {
  const navigate = useNavigate()
  if (!data || data.length === 0) { return <p className="text-center text-gray-500 dark:text-gray-400 my-36">Heç bir kateqoriya tapılmadı.</p> }

  return (
    <div className="container mx-auto pb-8 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((cat) => (
          <div key={cat.id} onClick={() => navigate(`/categorydetail/${cat.id}`)} className="group relative h-56 cursor-pointer overflow-hidden rounded-xl shadow-md dark:shadow-neutral-900 border border-transparent dark:border-neutral-800 transition-all">
            <div className="absolute inset-0 bg-cover bg-center blur-[2px] transition-all duration-500 group-hover:scale-105 group-hover:blur-0" style={{ backgroundImage: `url(${cat.image})` }}  />
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50 transition-colors duration-500 group-hover:bg-black/20 dark:group-hover:bg-black/30" />
            <h3 className="relative z-10 flex h-full items-center justify-center text-center text-white text-2xl font-bold px-4 py-2 bg-black/30 backdrop-blur-[1px] rounded-xl transition-all duration-500 ease-in-out  hover:text-4xl">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;