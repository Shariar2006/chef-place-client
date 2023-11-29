/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import '../../../index.css'
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const MenageUsers = () => {
    const axiosPublic = useAxiosPublic()
    console.log(axiosPublic)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allUsers');
            return res.data
        }
    })


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
                axiosPublic.delete(`/users/${id}`)
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

    const handleMakeAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to make this person an administrator?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/users/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Make Admin!",
                                text: "This person is now an admin",
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
            <DashboardTitle subTitle="How many??" headerTitle='Menage All Users'></DashboardTitle>
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">All Users: {users.length}</h2>
                </div>
                <div className="overflow-x-auto">

                    <table className="table text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {user?.name}
                                    </td>
                                    <td className="font2 text-lg">
                                        {user?.email}
                                    </td>
                                    <td>
                                        {user?.badge}
                                    </td>
                                    <th>
                                        {user?.role === 'admin' ? 'Admin' :
                                            <button
                                                onClick={() => { handleMakeAdmin(user?._id) }}
                                                className="btn btn-ghost btn-lg text-[#EB671C]">Make Admin</button>
                                        }
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => { handleDelete(user?._id) }}
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

export default MenageUsers;