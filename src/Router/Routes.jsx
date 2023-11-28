import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import MealDetails from "../Components/Pages/MealDetails/MealDetails";
import Login from "../Components/Pages/JoinUs/Login/Login";
import Register from "../Components/Pages/JoinUs/Register/Register";
import AllMeals from "../Components/Pages/AllMeals/AllMeals";
import DashboardLayout from "../Components/Dashboard/DashboardLayout";
import RequestedMeals from "../Components/Dashboard/UserDashboard/RequestedMeals";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../Components/Dashboard/UserDashboard/MyReview";
import MyProfile from "../Components/Dashboard/UserDashboard/MyProfile";
import MenageUsers from "../Components/Dashboard/Admin/MenageUsers";


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
  //dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [

      //admin route
      {
        path: 'menageUsers',
        element: <MenageUsers></MenageUsers>
      },
      //normal user
      {
        path: 'requestedMeals',
        element: <RequestedMeals></RequestedMeals>
      },
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'myReview',
        element: <MyReview></MyReview>
      },
    ]
  },
]);

export default router;