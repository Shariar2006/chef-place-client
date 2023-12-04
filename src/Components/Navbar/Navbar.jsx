import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import '../../index.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { LuLogOut } from "react-icons/lu";
import useIsAdmin from "../../Hooks/useIsAdmin";
import { IoNotificationsSharp } from "react-icons/io5";
import useUpcoming from "../../Hooks/useUpcoming";



const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useIsAdmin()
    const [upcomingMeal] = useUpcoming()

    const handleLogOut = () => {
        logOut()
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleTheme = e =>{
        if(e.target.checked){
            setTheme('dark')
        }else{ 
            setTheme('light')
        }
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
            <div className="navbar z-10 max-w-[1440px] bg-base-100 shadow-lg p-1 fixed transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="p-3 lg:block hidden"><img className="w-1/4" src={logo} alt="" /></Link>
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
                <div className="mx-3">
                    <label className="swap swap-rotate">

                        <input type="checkbox" onChange={handleTheme} />

                        <svg className="swap-on fill-current w-7 my h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        <svg className="swap-off fill-current w-7 my h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;