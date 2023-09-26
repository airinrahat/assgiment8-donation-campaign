import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";
import DonatesLoader from "../Components/loaders/donatesLoader";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/category.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: DonatesLoader,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: DonatesLoader,
      },
      {
        path: "/categories/:id",
        element: <Category></Category>,
        loader: () => fetch("/public/category.json"),
      },
    ],
  },
]);

export default myCreatedRouter;
