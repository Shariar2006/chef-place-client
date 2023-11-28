import { FaTrashCan } from "react-icons/fa6";
import useReview from "../../../Hooks/useReview";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UpdateAReview from "./UpdateAReview";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyReview = () => {
    const axiosPublic = useAxiosPublic()
    // const axiosSecure = useAxiosSecure()
    const [review, reload] = useReview()

console.log(review)
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
                axiosPublic.delete(`/review/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
                            reload()
                        }
                    })
            }
        });
    }

   


    return (
        <div className="font3 text-[#F6E9B1]">
            <DashboardTitle subTitle='your Requested Meals' headerTitle='See your all review'></DashboardTitle>
            <div className="w-11/12 mx-auto p-5 flex justify-between">
                <h2 className="text-4xl font-semibold">Total Review: {review.length}</h2>

            </div>


            <div className="overflow-x-auto">
                {
                    review?.length === 0 ? <>
                        <h1 className="text-center text-3xl overflow-y-hidden mt-36 font-semibold">You have not left any reviews yet</h1>
                    </> :


                        <table className="table text-lg">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>#</th>
                                    <th>Meal Name</th>
                                    <th>Likes</th>
                                    <th>Reviews</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>View Meal</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    review?.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            {item?.name}
                                        </td>
                                        <td>
                                            {/* {item?.like} */}
                                            0
                                        </td>
                                        <td>
                                            {review?.length}
                                        </td>
                                        {
                                            review?.map(reviewItem=><UpdateAReview key={reviewItem._id} reviewItem={reviewItem}></UpdateAReview>)
                                        }
                                        <th>
                                            <button
                                                onClick={() => { handleDelete(item?._id) }}
                                                className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                        </th>
                                        <td>
                                            <Link to={`/meal/${item?.menuId}`}><button className="hover:text-[#EB671C] hover:bg-[#FFF1B0] rounded-md py-1 px-2">View Meal</button></Link>

                                        </td>
                                    </tr>)
                                }
                            </tbody>


                        </table>
                }
            </div>
        </div>
    );
};

export default MyReview;