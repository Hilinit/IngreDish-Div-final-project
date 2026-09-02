import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppData } from "../../../hooks/useAppData";
import { useAuth } from "../../../context/AuthContext";
import { useFavorites } from "../../../context/FavoritesContext";
import { useBookmarks } from "../../../context/BookmarksContext";

export const useDetailLogic = (isBlog) => {
  const { recipes, blogs, loading } = useAppData();
  const { id } = useParams();
  const { incrementViews } = useAuth();
  const { favorites, dispatch: favoriteDispatch } = useFavorites();
  const { bookmarks, dispatch: bookmarkDispatch } = useBookmarks();

  const DATA = isBlog ? blogs : recipes;
  
  const currentItem = DATA?.find((item) => String(item.id).trim() === String(id).trim()) || DATA?.[0];
  const relatedItems = DATA?.filter((item) => item.category === currentItem?.category && String(item.id) !== String(currentItem?.id)) || [];
  
  const isActive = isBlog ? bookmarks.some((b) => String(b.id) === String(currentItem?.id)) : favorites.some((f) => String(f.id) === String(currentItem?.id));

  const handleToggle = (e) => {
    e.preventDefault();
    if (!currentItem) return;
    if (isBlog) {  bookmarkDispatch({ type: "TOGGLE_BOOKMARK", payload: currentItem }) } 
    else { favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: currentItem }) }
  };

  useEffect(() => {
    if (currentItem?.id) {
      const pageKey = `${isBlog ? "blog" : "recipe"}_${currentItem.id}`;
      incrementViews(pageKey);
    }
  }, [currentItem?.id, isBlog]);

  return { loading, DATA, currentItem, relatedItems, isActive, handleToggle }
};