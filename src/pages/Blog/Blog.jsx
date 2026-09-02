import DetailLayout from "../../components/ui/DetailLayout"
import Title from "../../components/ui/Title"
import { useAppData } from "../../hooks/useAppData"
import { Loading } from "../../components/ui/LoadingError"
import NotFound from "../NotFound"

const Blog = () => {
  const { formatBlogs, loading } = useAppData()
  if (loading) { return <Loading /> }
  if (!formatBlogs || formatBlogs.length === 0) { return (<NotFound message="Bloqlar tapılmadı." to="/blog" />) }

  return (
    <div className="container mx-auto px-2 lg:px-12 pb-8 pt-[120px]">
      <Title title="Bütün Bloqlar" dec="Aşpaz tövsiyələri və mətbəx mədəniyyəti ilə tanış olun."/>
      <DetailLayout data={formatBlogs} />
    </div>
  )
}

export default Blog
