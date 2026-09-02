import { useState, useEffect } from 'react';

export const transformToDetailLayout = (dataList, type = "recipe") => {
  if (!Array.isArray(dataList)) return [];

  return dataList.map((item) => {
    if (type === "blog") {
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
      };
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
    };
  });
};

export function useAppData() {
  const [recipes, setRecipes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [recipeRes, blogRes, ingredientRes, categoryRes] = await Promise.all([
          fetch('https://raw.githubusercontent.com/Hilinit/datas/main/IngreDishData/recipes.json'),
          fetch('https://raw.githubusercontent.com/Hilinit/datas/main/IngreDishData/blog.json'),
          fetch('https://raw.githubusercontent.com/Hilinit/datas/main/IngreDishData/ingredients.json'),
          fetch('https://raw.githubusercontent.com/Hilinit/datas/main/IngreDishData/categories.json')
        ]);

        const recipesData = await recipeRes.json();
        const blogData = await blogRes.json();
        const ingredientsData = await ingredientRes.json();
        const categoriesData = await categoryRes.json();

        setRecipes(recipesData.recipes || recipesData);
        setBlogs(blogData.blogs || blogData);
        setIngredients(ingredientsData.ingredients || ingredientsData);
        setCategories(categoriesData.categories || categoriesData);
      } catch (err) {
        console.error("Xəta baş verdi:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formatRecipes = transformToDetailLayout(recipes, "recipe");
  const formatBlogs = transformToDetailLayout(blogs, "blog");

  return { recipes, blogs, formatRecipes, formatBlogs, ingredients, categories, loading, error }
}




