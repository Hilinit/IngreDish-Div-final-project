export const transformToDetailLayout = (dataList, type = "recipe") => {
  if (!Array.isArray(dataList)) return [];

  return dataList.map((item) => {
    if (type === "blog") {
      // Blog 
      return {
        id: item.id,
        isBlog: true,
        pageTitle: "Bütün Kateqoriyalar",
        title: item.title,
        description: item.excerpt || item.description,
        highlighter: "Önə Çıxan Məqalə",
        image: item.image,
        time: item.readMinutes ? `oxuma vaxtı: ${item.readMinutes} dəq` : item.time,
        rating: item.topic || "Məqalə",
        difficulty: item.date || "",
        link: `/blogdetail/${item.id}`
      }
    }
    return {
      id: item.id,
      isBlog: false,
      pageTitle: "Bütün Reseptlər",
      title: item.title,
      description: item.description || item.longDescription || item.shortDescription,
      highlighter: "Önə Çıxan Resept",
      image: item.image,
      time: item.time,
      rating: item.rating,
      difficulty: item.difficulty,
      link: `/recipedetail/${item.id}`
    }
  })
}