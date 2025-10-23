import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage />,
  },
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     // errorElement: <ErrorPage />,
//   },
]);

export default router;
