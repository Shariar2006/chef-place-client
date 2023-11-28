/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const UpdateAReview = ({ reviewItem }) => {
    const axiosPublic = useAxiosPublic()
    const { _id, review } = reviewItem || {}

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        // if (res.data.success) {
        const reviews = {
            review: data.review
        }
        console.log(reviews)
        const editReview = await axiosPublic.patch(`/review/${_id}`, reviews)
        console.log(editReview.data)
        if (editReview.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Your review Edit successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
        // 
        // }
    }


    return (
        <th>

            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}><FaEdit /></button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Review!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea defaultValue={review} {...register("review")} name="review" className="textarea textarea-bordered h-24 text-lg font2 text-[#FFF1B0] w-full" placeholder="Review in detail"></textarea>
                        <div>
                            <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold' type="submit" value="Edit Review" />
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}><FaEdit /></button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Review!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea defaultValue={review} {...register("review")} name="review" className="textarea textarea-bordered h-24 text-lg font2 text-[#FFF1B0] w-full" placeholder="Review in detail"></textarea>
                        <div>
                            <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold' type="submit" value="Edit Review" />
                        </div>
                    </form>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </div>
            </dialog> */}
        </th>

    );
};

export default UpdateAReview;