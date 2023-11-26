import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import '../../index.css'

const Navbar = () => {

    const navLink = <div className="lg:flex text-lg font-semibold">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Home</NavLink></li>
        <li><NavLink to={'/meals'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Meals</NavLink></li>
        <li><NavLink to={'/upcomingMeals'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Upcoming Meals</NavLink></li>
        <li><NavLink to={'/login'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Join Us</NavLink></li>
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
            </div>
        </div>
    );
};

export default Navbar;