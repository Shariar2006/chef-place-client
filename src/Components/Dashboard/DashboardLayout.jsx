import { FaBook, FaCartShopping, FaHouse, FaList, FaUtensils } from "react-icons/fa6";
import { MdUpcoming } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import '../../index.css'
import { VscPreview } from "react-icons/vsc";
import { RiMenuLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { FaUsers } from "react-icons/fa";
import useIsAdmin from "../../Hooks/useIsAdmin";

const DashboardLayout = () => {
    const [isAdmin] = useIsAdmin()
    return (
        <div>
            <div className="flex max-w-7xl mx-auto">
                <div className="w-64 min-h-screen bg-[#EB671C] p-2">
                    <img className="p-10" src={logo} alt="" />
                    <ul className="menu text-[#FFF1B0] text-lg font3">

                        {
                            isAdmin ? <>
                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/adminProfile' className=''>
                                    <ImProfile />Admin Profile</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/menageUsers' className=''>
                                <FaUsers /> Menage Users</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/addMeal' className=''>
                                <FaUtensils /> Add Meal</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/allMeals' className=''>
                                    <FaList/> All Meals</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/allReviews' className=''>
                                <VscPreview /> All Reviews</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/serveMeals' className=''>
                                <FaBook /> Serve Meals</NavLink></li>

                                <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/upcomingMeals' className=''>
                                <MdUpcoming /> Upcoming Meals</NavLink></li>
                            </> :
                                <>
                                    <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/myProfile' className=''>
                                        <ImProfile />My Profile</NavLink></li>

                                    <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/requestedMeals' className=''>
                                        <FaCartShopping /> Requested Meals</NavLink></li>

                                    <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/dashboard/myReview' className=''>
                                        <VscPreview /> My Review</NavLink></li>
                                </>
                        }




                        {/* <div className="divider text-[#FFF1B0]"></div> */}
                        <hr />


                        <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/' className=''>
                            <FaHouse /> Home</NavLink></li>

                        <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/allMeals' className=''>
                            <RiMenuLine /> All Meals</NavLink></li>

                        <li className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md"><NavLink to='/order/contact' className=''>
                            <TfiEmail /> Contact</NavLink></li>

                    </ul>
                </div>
                <div className="flex-1 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;