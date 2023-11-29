/* eslint-disable react/no-unescaped-entities */
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import '../../../index.css'
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import useReview from "../../../Hooks/useReview";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const RequestedMeals = () => {
    const [cart, refetch] = useCart()
    const [review] = useReview()
    const axiosSecure = useAxiosPublic()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
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
                axiosSecure.delete(`/carts/${id}`)
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
            <DashboardTitle subTitle='your Requested Meals' headerTitle='WANNA ADD MORE ?'></DashboardTitle>
            
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">Total Order: {cart.length}</h2>
                    <h2 className="text-4xl font-semibold">Total Price: {totalPrice}</h2>

                </div>


                <div className="overflow-x-auto">
                    {
                        cart?.length === 0 ? <>
                            <h1 className="text-center text-3xl overflow-y-hidden mt-36 font-semibold">You haven't requested any meals yet</h1>
                        </> :


                            <table className="table text-lg">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Meal Name</th>
                                        <th>Status</th>
                                        <th>Likes</th>
                                        <th>Reviews</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        cart?.map((item, index) => <tr key={item._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                {item?.name}
                                            </td>
                                            <td>
                                                <h1>{item?.status}</h1>
                                            </td>
                                            <td>
                                                {item?.like}
                                            </td>
                                            <td>
                                                {review?.length}
                                            </td>
                                            <td>
                                                $ {item?.price}
                                            </td>
                                            <th>
                                                <button
                                                    onClick={() => { handleDelete(item?._id) }}
                                                    className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>


                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default RequestedMeals;