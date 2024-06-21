import { useLoaderData, useParams } from "react-router-dom";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateMeal = () => {

    const image_hosting_key = import.meta.env.VITE_IMAGE_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const { id } = useParams()

    const { _id, name, recipe, meal_distributor, email, category, rating, description, posted_time, posted_date, price, image, } = useLoaderData()

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            body: imageFile
        })
        // if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                meal_distributor: data.meal_distributor,
                email: data.email,
                category: data.category,
                rating: data.rating,
                description:data.description,
                posted_time: data.posted_time,
                posted_date: data.posted_date,
                price: parseFloat(data.price),
                image: image || res?.data?.data?.display_url
                }
        console.log(menuItem)
        
        const menuRes = await axiosPublic.patch(`/meal/${_id}`, menuItem)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is Update`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        // 
        // }
    }

    return (
        <div>
            <div className="my-8">
                <DashboardTitle subtitle="What's new?" headerTitle='Update An Item'></DashboardTitle>
            </div>

            <div className="p-5 pl-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full ">
                                <option disabled value=''>Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Ingredients*</span>
                            </label>
                            <input type="text" defaultValue={recipe} placeholder="Ingredients" {...register("recipe")} className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Distributor*</span>
                            </label>
                            <input type="text" defaultValue={meal_distributor} placeholder="Name" {...register("meal_distributor")} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="Email" defaultValue={email} {...register("email")} className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="flex gap-5">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Rating*</span>
                            </label>
                            <input type="text" placeholder="Rating" defaultValue={rating} {...register("rating")} className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Posted Date/Time*</span>
                            </label>
                            <div className="flex gap-2">
                                <input type="date" placeholder="Date" defaultValue={posted_date} {...register("posted_date")} className="input input-bordered w-full " />
                                <input type="time" placeholder="Recipe" defaultValue={posted_time} {...register("posted_time")} className="input input-bordered w-full " />
                            </div>

                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" defaultValue={price} {...register("price")} className="input input-bordered w-full " />
                        </div>

                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" defaultValue={description} {...register("description")} placeholder="details"></textarea>
                    </div>

                    <div>
                        <input type="file" {...register("image")} className="file-input w-full max-w-xs" />
                    </div>

                    <input type="submit" value="Update" className="btn" />
                </form>
            </div>
        </div>
    );
};

export default UpdateMeal;