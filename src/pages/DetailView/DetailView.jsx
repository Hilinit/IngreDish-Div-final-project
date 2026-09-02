
import { Loading } from "../../components/ui/LoadingError";
import NotFound from "../NotFound";
import BlogContent from "./components/BlogContent";
import RecipeContent from "./components/RecipeContent";
import DetailHeaderInfo from "./components/DetailHeaderInfo";
import DetailVideoPlayer from "./components/DetailVideoPlayer";
import RelatedItems from "./components/RelatedItems";
import DetailHero from "./components/DetailHero";
import { useDetailLogic } from "./hook/useDetailLogic";

const DetailView = ({ isBlog = false }) => {

  const { loading, DATA, currentItem, relatedItems, isActive, handleToggle } = useDetailLogic(isBlog)
  
  if (loading) { return <Loading />; }
  if (!DATA ) { return ( <NotFound message={isBlog ? "Bloq tapılmadı" : "Resept tapılmadı"} to={isBlog ? "/blog" : "/recipes"} /> ) }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-neutral-950 text-slate-800 dark:text-gray-100 pb-16 pt-24 w-full transition-colors">
      <DetailHero currentItem={currentItem} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-8 relative z-10 space-y-6">
        <DetailHeaderInfo currentItem={currentItem}  isBlog={isBlog}  isActive={isActive}  handleToggle={handleToggle}/>
        {isBlog ? <BlogContent blog={currentItem} /> : <RecipeContent recipe={currentItem} />}
        <DetailVideoPlayer isBlog={isBlog} embedUrl={currentItem?.embedUrl} title={currentItem?.title} />
        <RelatedItems items={relatedItems} isBlog={isBlog} />
      </div>
    </div>
  );
};

export default DetailView;