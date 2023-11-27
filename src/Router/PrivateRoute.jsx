/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div><img className="mx-auto h-screen" src="https://media.tenor.com/lm7QorZ-GPgAAAAC/littlekingdoms-egg.gif?fbclid=IwAR0CLppez50AG7HRS2Xg8izFKdyDFdeHU1uL09Gxhj01VO2FtVmqGYud-LY" alt="" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;