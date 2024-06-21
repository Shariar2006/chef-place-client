import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import '../../index.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { LuLogOut } from "react-icons/lu";
import useIsAdmin from "../../Hooks/useIsAdmin";
import { IoNotificationsSharp } from "react-icons/io5";
import useUpcoming from "../../Hooks/useUpcoming";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useIsAdmin()
    const [upcomingMeal] = useUpcoming()

    const handleLogOut = () => {
        logOut()
    }


    const navLink = <div className="lg:flex text-lg font-semibold">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Home</NavLink></li>
        <li><NavLink to={'/allMeals'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Meals</NavLink></li>
        <li><NavLink to={'/upcomingMeals'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        ><p className="flex">
                <p className="text-xl"><IoNotificationsSharp /></p>
                <h4 className="badge">+{upcomingMeal?.length}</h4>
            </p>
        </NavLink></li>



    </div>

    return (
        <div>
            <div className="navbar z-10 max-w-full mx-auto bg-base-100 shadow-lg p-1 fixed navbarTransparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="p-3 lg:block lg:ml-10 hidden"><img className="w-1/4" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div>
                    {
                        user?.email ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    {
                                        user?.photoURL ?
                                            <img className="rounded-full w-9 mx-1" src={user.photoURL} alt="" />
                                            :
                                            <img className="rounded-full w-9 mx-1" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                    }
                                </label>
                                <ul tabIndex={0} className="my-3 z-[1] p-2 py-10 shadow menu menu-sm dropdown-content rounded-box w-52 text-center border-4 border-[#EB671C] text-[#EB671C] bg-base-200 font2">
                                    {
                                        user?.photoURL ?
                                            <img className="rounded-full w-9 mx-auto" src={user.photoURL} alt="" />
                                            :
                                            <img className="rounded-full w-9 mx-auto" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                    }
                                    <p className="text-xs lg:text-lg ">{user.displayName}</p>
                                    <p className="text-xs mb-2">{user.email}</p>
                                    <hr />
                                    <div className=" mt-4 ml-2 text-xs lg:text-base">
                                        {
                                            user && isAdmin ? <NavLink to={'/dashboard/menageUsers'}><button className="btn text-[#EB671C]">Dashboard</button></NavLink> :
                                                <NavLink to={'/dashboard/requestedMeals'}><button className="btn text-[#EB671C]">Dashboard</button></NavLink>
                                        }
                                        {/* <NavLink to={'/dashboard/requestedMeals'}><button className="btn text-[#EB671C]">Dashboard</button></NavLink> */}
                                        <button onClick={handleLogOut}
                                            className="text-[#EB671C] btn"
                                        > <LuLogOut className="text-xl font-bold"></LuLogOut>
                                            Log Out
                                        </button>
                                    </div>
                                </ul>
                            </div>

                        </> :
                            <ul>
                                <li><NavLink to={'/login'}
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg lg:px-1 py-2 lg:w-28" : "lg:mx-1 text-[#EB671C] lg:flex text-lg font-semibold lg:w-28"}
                                >Join Us</NavLink></li>
                            </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;