import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import MealDetails from "../Components/Pages/MealDetails/MealDetails";
import Login from "../Components/Pages/JoinUs/Login/Login";
import Register from "../Components/Pages/JoinUs/Register/Register";
import AllMeals from "../Components/Pages/AllMeals/AllMeals";


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
      {
        path: '/allMeals',
        element: <AllMeals></AllMeals>
      },

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
]);

export default router;