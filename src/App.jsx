import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout.jsx";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import MealsPage from "./pages/mealsPage.jsx";
import CommunityPage from "./pages/communityPage.jsx";
import ShearMealPage from "./pages/shear-mealPage.jsx";

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
