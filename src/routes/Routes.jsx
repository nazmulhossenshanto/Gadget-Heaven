import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../pages/Home";
import Statictics from "../pages/Statictics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statictics></Statictics>,
      },
      {
        path: "/dashboard",
        element: <h1 className="mt-20">Dashboard</h1>,
      },
    ],
  },
]);

export default router;
