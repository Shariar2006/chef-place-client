import { FaTrashCan } from "react-icons/fa6";
import useMenu from "../../../Hooks/useMenu";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import '../../../index.css'
import { FaEdit } from "react-icons/fa";

const AdminAllMeal = () => {

    const [menu] = useMenu()
    return (
        <div className="font3 text-[#F6E9B1]">
            <DashboardTitle subTitle="Hurry Up" headerTitle='Menage All Meals'></DashboardTitle>
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">All Meals: {menu.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    
                            <table className="table font2 text-sm">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Meal</th>
                                        <th>Distributor</th>
                                        <th>Email</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        menu?.map((menuItem, index) => <tr key={menuItem._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                {menuItem?.name}
                                            </td>
                                            <td>
                                                {menuItem?.meal_distributor}
                                            </td>
                                            <td className="">
                                                {menuItem?.email}
                                            </td>
                                            <th>
                                                <button
                                                    // onClick={() => { handleDelete(user?._id) }}
                                                    className="btn btn-ghost btn-lg "><FaEdit /></button>
                                            </th>
                                            <th>
                                                <button
                                                    // onClick={() => { handleDelete(user?._id) }}
                                                    className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminAllMeal;