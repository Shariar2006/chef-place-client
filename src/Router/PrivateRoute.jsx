/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div><img className="mx-auto h-screen" src="https://i.pinimg.com/originals/e6/13/21/e613212546d6c27600379a26cd601365.gif?fbclid=IwAR0TUGpwTWQXokTxLrofEHs01aaJT-_ervC3pdTKbojufBHldwVX_fOiu44" alt="" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;