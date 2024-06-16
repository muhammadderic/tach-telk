import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNewArticle from "./pages/AddNewArticle";
import ArticlesPage from "./pages/ArticlesPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-article" element={<AddNewArticle />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
