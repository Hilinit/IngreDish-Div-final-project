import { Loading } from "../../components/ui/LoadingError";
import { useAppData } from "../../hooks/useAppData";
import NotFound from "../NotFound";
import RecipeCards from "./components/RecipeCards";

const Recipies = () => {
  const { recipes, loading } = useAppData()
  if ( loading ) { return <Loading/> }
  if ( !recipes ) { return ( <NotFound message="Resept tapılmadı."  to="/recepies" /> ) }
  return (
    <div className="pt-20 pb-8 lg:px-12">
      <RecipeCards  data={recipes} title="Bütün Reseptlər" dec="Sevdiyin resepti kəşf et, bişir və paylaş!"/>
    </div>
  );
}
export default Recipies;