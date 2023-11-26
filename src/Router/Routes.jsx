import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import MealDetails from "../Components/Pages/MealDetails/MealDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/meal/:id',
            element: <MealDetails></MealDetails>
        },
      ]
    },
  ]);

export default router;