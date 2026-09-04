import Category from "./components/Category"; 
import { useState } from "react"; 
import Search from "../../components/ui/Search"; 
import Title from "../../components/ui/Title"; 
import { Loading } from "../../components/ui/LoadingError";
import { useAppData } from "../../hooks/useAppData";
 
const Catalog = () => { 
  const { categories, loading } = useAppData()
  const [search, setSearch] = useState(""); 
  const [selectCat, setSelectCat] = useState(""); 
 
  const filteredCategories = (categories || []).filter((cat) => { 
    const matchesSearch = cat.name.toLowerCase().startsWith(search.toLowerCase()); 
    const matchesSelect = selectCat ? cat.name.toLowerCase() === selectCat.toLowerCase() : true; 
    return matchesSearch && matchesSelect; 
  }) 

  if (loading) { return <Loading /> }

  return ( 
    <div className="pt-24 lg:pt-32 lg:px-12 px-2 min-h-screen"> 
      <Title title="Bütün Kateqoriyalar" dec="Aşağıdakı kateqoriyalardan birini seçərək və ya axtararaq sizə uyğun olan reseptləri tapa bilərsiniz." /> 
      <Search search={search} setSearch={setSearch} placeholder="Kateqoriya axtar... (məs: Ət, Toyuq, Salat)" style='w-full border-4 border-white dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white px-6 py-4 rounded-lg outline-none shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(194,65,12,0.3)]' /> 
      <Category data={filteredCategories} setSelectCat={setSelectCat} selectCat={selectCat} /> 
    </div> 
  ); 
}; 
 
export default Catalog;