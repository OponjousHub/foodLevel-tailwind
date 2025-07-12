import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout.jsx";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import MealsPage, { loader as mealsLoader } from "./pages/mealsPage.jsx";
import CommunityPage from "./pages/communityPage.jsx";
import ShearMealPage from "./pages/shear-mealPage.jsx";
import MealDetailPage, {
  loader as mealDetailLoader,
} from "./pages/mealsDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "meals",
        element: <MealsPage />,
        loader: mealsLoader,
      },
      {
        path: "meals/:mealId",
        element: <MealDetailPage />,
        loader: mealDetailLoader,
      },
      {
        path: "meals/shear",
        element: <ShearMealPage />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
