import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CiAlarmOn } from "react-icons/ci"
import { useAppData } from "../../../hooks/useAppData"

const Suggestion = () => {
  const { recipes, loading } = useAppData()
  const [featured, setFeatured] = useState(null)
  
  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const random = Math.floor(Math.random() * recipes.length)
      setFeatured(recipes[random])
    }
  }, [recipes]) 
  if (loading || !featured) { return null }

  return (
    <div className="w-full lg:w-[550px]">
      <Link to={`/recipedetail/${featured.id}`} className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl p-3 flex flex-col lg:flex-row items-center gap-4 hover:-translate-y-1 transition-all duration-300 border border-orange-950/10 dark:border-neutral-800 w-full" >
        <img src={featured.image} alt={featured.title} className="object-cover w-full lg:w-[250px] h-[180px] lg:h-[200px] rounded-2xl shrink-0 shadow-md" />

        <div className="flex-1 min-w-0 flex flex-col justify-between p-2 w-full">
          <div>
            <p className="text-sm lg:text-lg text-[#C2410C] dark:text-orange-400 font-extrabold uppercase tracking-wider mb-2 lg:mb-5">
              Bu günün resepti
            </p>
            <h3 className="text-base lg:text-lg font-bold text-gray-800 dark:text-white leading-snug"> {featured.title} </h3>
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-3">
              {featured.description}
            </p>
          </div>
          <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 mt-3 lg:mt-2">
            <CiAlarmOn size={16} className="text-[#C2410C] dark:text-orange-400 shrink-0" /> 
            <span>{featured.time} dəq</span>
            <span>·</span>
            <span>{featured.difficulty}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Suggestion