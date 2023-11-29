/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const MealPost = ({ item }) => {
    const axiosPublic = useAxiosPublic()

    const { _id, name, recipe, meal_distributor, email, category, rating, description, posted_time, posted_date, price, like, review, image, } = item || {}

    const handleAddMeal = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Add this Meal",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I am sure!"
        }).then((result) => {
            if (result.isConfirmed) {

                const menuItem = { id: _id, name, recipe, meal_distributor, email, category, rating, description, posted_time, posted_date, price, like, review, image, }

                axiosPublic.post(`/meal/${id}`, menuItem)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged > 0) {
                            Swal.fire({
                                title: "Meal add!",
                                text: "Added this meal",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {recipe}
            </td>

            <th>
                <button
                    onClick={() => { handleAddMeal(_id) }}
                    className="btn btn-ghost btn-lg text-[#EB671C]">Add Meal</button>

            </th>
        </tr>
    );
};

export default MealPost;