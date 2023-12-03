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
import AdminRoute from "./AdminRoute";
import AdminAllMeal from "../Components/Dashboard/Admin/AdminAllMeal";
import ServeMeal from "../Components/Dashboard/Admin/ServeMeal";
import AddMeals from "../Components/Dashboard/Admin/AddMeals";
import UpcomingMeals from "../Components/Pages/UpcomingMeals/UpcomingMeals";
import AdminUpcomingMeals from "../Components/Dashboard/Admin/AdminUpcomingMeals";
import UpdateMeal from "../Components/Dashboard/Admin/UpdateMeal";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import AdminProfile from "../Components/Dashboard/Admin/AdminProfile";


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
        path: '/checkOut/:badge',
        element: <CheckOut></CheckOut>
      },
      {
        path: '/allMeals',
        element: <AllMeals></AllMeals>
      },
      {
        path: '/upcomingMeals',
        element: <UpcomingMeals></UpcomingMeals>
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
  {
    path: '*',
    element: <img className="mx-auto h-screen" src="https://cdn.dribbble.com/users/189859/screenshots/3639645/abc.gif" alt="" />
  },
  //dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [

      //admin route
      {
        path: 'adminProfile',
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: 'menageUsers',
        element: <AdminRoute><MenageUsers></MenageUsers></AdminRoute>
      },
      {
        path: 'adminAllMeals',
        element: <AdminRoute><AdminAllMeal></AdminAllMeal></AdminRoute>
      },
      {
        path: 'serveMeals',
        element: <AdminRoute><ServeMeal></ServeMeal></AdminRoute>
      },
      {
        path: 'addMeal',
        element: <AdminRoute><AddMeals></AddMeals></AdminRoute>
      },
      {
        path: 'adminUpcomingMeals',
        element: <AdminRoute><AdminUpcomingMeals></AdminUpcomingMeals></AdminRoute>
      },
      {
        path: 'updateMeal/:id',
        element: <AdminRoute><UpdateMeal></UpdateMeal></AdminRoute>,
        loader: ({params})=> fetch(`https://chef-place-server.vercel.app/meal/${params.id}`)
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