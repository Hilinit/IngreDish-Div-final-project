import { useState } from "react"
// import { INGREDIENTS} from "../provider/data/ingredients"

import { useAppData } from "../../hooks/useAppData"
import { Loading } from "../../components/ui/LoadingError"
import WhatICookHero from "./components/WhatICookHero"
import SelectedList from "./components/SelectedList"
import AdviceResult from "./components/AdviceResult"
import Ingredients from "./components/Ingredients"

const WhatICook = () => {
  const { ingredients, loading } = useAppData()
  const [selectedIds, setSelectedIds] = useState([])
  const clearAll = () => {setSelectedIds([])}
  const toggleIngredient = (id) => {
    if (selectedIds.includes(id)) {setSelectedIds(selectedIds.filter((item) => item !== id))} 
    else {setSelectedIds([...selectedIds, id])}
  }
  if (loading) { return <Loading/> }
  return (
      <div className="min-h-screen text-slate-800 dark:text-slate-100 pt-24 lg:pt-32 px-4 lg:px-8 pb-12 w-full transition-colors">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6"> 
            <WhatICookHero  />
            <SelectedList selectedIds={selectedIds} allIngredients={ingredients} toggleIngredient={toggleIngredient} clearAll={clearAll} />
            <AdviceResult selectedIds={selectedIds} allIngredients={ingredients}/>
          </div>
          <Ingredients Ingredients={ingredients} selectedIds={selectedIds} toggleIngredient={toggleIngredient}/>
        </div>
      </div>
  )
}
export default WhatICook;