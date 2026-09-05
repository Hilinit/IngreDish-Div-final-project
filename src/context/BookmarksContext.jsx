import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useAppData } from "../hooks/useAppData";

const initialState = [];
const bookmarksReducer = (state, action) => {
  if (action.type === "SET_BOOKMARKS") { return action.payload || [] } 
  else if (action.type === "TOGGLE_BOOKMARK") {
    const exists = state.some((item) => String(item.id) === String(action.payload.id));
    if (exists) { return state.filter((item) => String(item.id) !== String(action.payload.id)) }
    return [...state, action.payload];
  } 
  else if (action.type === "CLEAR_BOOKMARKS") { return []} 
  else { return state }
}

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const { user, updateUser } = useAuth();
  const [bookmarks, dispatch] = useReducer(bookmarksReducer, initialState);
  const [isReady, setisReady] = useState(false);
  const { blogs } = useAppData();

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    if (user && !user.isGuest) {
      if (user.bookmarkIds && user.bookmarkIds.length > 0) { 
        const userBookmarks = blogs.filter((blog) => 
          user.bookmarkIds.some((bookId) => String(bookId) === String(blog.id)));
        dispatch({ type: "SET_BOOKMARKS", payload: userBookmarks });
      } 
      else { dispatch({ type: "CLEAR_BOOKMARKS" }) }
    } 
    else { dispatch({ type: "CLEAR_BOOKMARKS" }) }
    setisReady(true);
  }, [user, blogs]);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem("bookmarked_blogs", JSON.stringify(bookmarks));

    if (user && !user.isGuest) {
      const bookmarkIds = bookmarks.map((item) => item.id);
      if (JSON.stringify(user.bookmarkIds) !== JSON.stringify(bookmarkIds)) { updateUser({ bookmarkIds }) }
    }
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, dispatch }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const toggleBookmark = (blog) => {
    if (!isLoggedIn || user?.isGuest) {
      navigate("/profile");
      return;
    }
    context.dispatch({ type: "TOGGLE_BOOKMARK", payload: blog });
  };

  const protectedDispatch = (action) => {
    if (action.type === "TOGGLE_BOOKMARK") {
      if (!isLoggedIn || user?.isGuest) {
        navigate("/profile");
        return;
      }
    }
    context.dispatch(action);
  };

  return { ...context, dispatch: protectedDispatch, toggleBookmark };
};