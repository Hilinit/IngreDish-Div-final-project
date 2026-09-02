import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import router from "./provider/Routers";
import { FavoritesProvider } from "./context/FavoritesContext";
import { BookmarksProvider } from "./context/BookmarksContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <AuthProvider>
    <FavoritesProvider>
      <BookmarksProvider>
        <RouterProvider router={router} />
      </BookmarksProvider>
    </FavoritesProvider>
  </AuthProvider>
  </ThemeProvider>
)
