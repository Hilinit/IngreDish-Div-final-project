import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import WhatICook from "../pages/WhatICook/WhatICook";
import Catalog from "../pages/Catalog/Catalog";
import CategoryDetail from "../pages/CategoryDetail";
import Blog from "../pages/Blog/Blog";
import DetailView from "../pages/DetailView/DetailView";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth/Auth";
import Recipies from "../pages/Recipes/Recipes";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, 
    children: [
      { index: true, loader: () => redirect("/home") },
      { path: "home", Component: Home },
      { path: "whaticook", Component: WhatICook },
      { path: "recepies", Component: Recipies },
      { path: "catalog", Component: Catalog },
      { path: "categorydetail/:id", Component: CategoryDetail },
      { path: "blog", Component: Blog },
      { path: "recipedetail/:id", Component: DetailView},
      { path: "blogdetail/:id", element: <DetailView isBlog={true} /> },
      { path: "profile", Component: Profile },
      { path: "*", Component: NotFound },
    ],
  },

  { path: "/login", Component: Auth },
  { path: "/register", Component: Auth}
]);

export default router;