import { FaTrashCan } from "react-icons/fa6";
import useMenu from "../../../Hooks/useMenu";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import '../../../index.css'
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const AdminAllMeal = () => {
    const axiosPublic = useAxiosPublic()
    const [menu, , refetch] = useMenu()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/meals/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

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
                                <th>Meal Details</th>
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
                                        <Link
                                        to={`/dashboard/updateMeal/${menuItem?._id}`}> 
                                        <button
                                        className="btn btn-ghost btn-lg "><FaEdit /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => { handleDelete(menuItem?._id) }}
                                            className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                    </th>
                                    <th>
                                    <Link to={`/meal/${menuItem._id}`}><button className="btn">View Details</button></Link>
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