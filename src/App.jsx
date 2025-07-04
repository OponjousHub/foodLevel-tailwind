import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout.jsx";
import "./index.css";
import HomePage from "./pages/homePage.jsx";
import MealsPage from "./pages/mealsPage.jsx";

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
