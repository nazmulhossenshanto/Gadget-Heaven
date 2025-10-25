import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Hero from "../Components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Hero></Hero>,
      },
      {
        path: "/statistics",
        element: <h1 className="mt-20">statistics</h1>,
      },
      {
        path: "/dashboard",
        element: <h1 className="mt-20">Dashboard</h1>,
      },
    ],
  },
]);

export default router;
