import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useAppData } from "../hooks/useAppData";

const initialState = [];

const favoritesReducer = (state, action) => {
  if (action.type === "SET_FAVORITES") { return action.payload || [] } 
  else if (action.type === "TOGGLE_FAVORITE") {
    const exists = state.some((item) => String(item.id) === String(action.payload.id));
    if (exists) { return state.filter((item) => String(item.id) !== String(action.payload.id));}
    return [...state, action.payload];
  } 
  else if (action.type === "CLEAR_FAVORITES") { return [] } 
  else { return state }
};

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { recipes } = useAppData();
  const { user, updateUser } = useAuth();
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!recipes || recipes.length === 0) return;

    if (user && !user.isGuest) {
      if (user.favoriteIds && user.favoriteIds.length > 0) {
        const hydratedFavorites = recipes.filter((recipe) => 
          user.favoriteIds.some((favId) => String(favId) === String(recipe.id))
        );
        dispatch({ type: "SET_FAVORITES", payload: hydratedFavorites });
      } 
      else { dispatch({ type: "CLEAR_FAVORITES" }) }
    } else {
      dispatch({ type: "CLEAR_FAVORITES" });
    }
    setIsInitialized(true);
  }, [user, recipes]);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("favorite_recipes", JSON.stringify(favorites));

    if (user && !user.isGuest) {
      const favoriteIds = favorites.map((item) => item.id);
      if (JSON.stringify(user.favoriteIds) !== JSON.stringify(favoriteIds)) { updateUser({ favoriteIds }) }
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const toggleFavorite = (recipe) => {
    if (!isLoggedIn || user?.isGuest) {
      navigate("/profile");
      return;
    }
    context.dispatch({ type: "TOGGLE_FAVORITE", payload: recipe });
  };

  const protectedDispatch = (action) => {
    if (action.type === "TOGGLE_FAVORITE") {
      if (!isLoggedIn || user?.isGuest) {
        navigate("/profile");
        return;
      }
    }
    context.dispatch(action);
  };

  return { ...context, dispatch: protectedDispatch, toggleFavorite };
};