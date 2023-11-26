import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import MealDetails from "../Components/Pages/MealDetails/MealDetails";
import Login from "../Components/Pages/JoinUs/Login/Login";
import Register from "../Components/Pages/JoinUs/Register/Register";


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