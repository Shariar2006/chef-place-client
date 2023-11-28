import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import '../../../index.css'
import { AwesomeButton } from "react-awesome-button";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useCart from "../../../Hooks/useCart";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const MealDetails = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    // const { name, recipe, image, price, _id } = item || {}
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()
    const { id } = useParams()

    const { data = {} } = useQuery({
        queryKey: ['meal-details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meal/${id}`)
            return res.data
        }
    })
    console.log(data.name)

    const handleRequest = () => {

        if (user && user.email) {
            const cartItem = {
                menuId: data._id,
                email: user.email,
                userName: user.displayName,
                name: data.name,
                image: data.image,
                price: data.price,
                like: 0,
                review: 0,
                status: 'Pending'
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res, res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${data.name} added to the cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch()
                    }
                })

        } else {

            Swal.fire({
                title: "You are not Logged In!",
                text: "Please Login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });

        }
    }
    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value


        if (user && user.email) {
            const reviewItem = {
                menuId: data._id,
                email: user.email,
                name: data.name,
                review: review
            }
            console.log(reviewItem)
            axiosSecure.post('/review', reviewItem)
                .then(res => {
                    console.log(res, res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `You have reviewed ${data.name}`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch()
                    }
                })

        } else {

            Swal.fire({
                title: "You are not Logged In!",
                text: "Please Login to add a review!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });

        }
    }

    return (
        <div>
            <div className="hero min-h-[70vh] bg-base-200 pt-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={data?.image} className="lg:mr-10 max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-2">
                        <h2 className="text-4xl text-[#EB671C] font3 font-semibold">{data?.name}</h2>
                        <p className="text-2xl text-[#FFF1B0] font3">Meal Distributor: {data?.meal_distributor}</p>
                        <p className="text-xl text-[#FFF1B0] font3">Posted Time :  {data?.posted_time}   {data?.posted_date}</p>
                        <p className=" text-[#FFF1B0] font3">{data?.recipe}</p>
                        <Rating className="font3"
                            style={{ maxWidth: 100 }}
                            value={data?.rating}
                            readOnly
                        />
                        <p className=" text-[#FFF1B0] font3">Likes : {data?.like}</p>
                        <p className=" text-[#FFF1B0] font3">Review : {data?.review}</p>

                        <div
                            onClick={() => { handleRequest(data) }}
                            className="card-actions justify-center font3">
                            <AwesomeButton type='secondary'>Meal request</AwesomeButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-20">
                <DashboardTitle subTitle='Sharing is Caring!!!' headerTitle='GIVE A REVIEW...'></DashboardTitle>
                <div className="form-control">
                    <form
                        // onSubmit={() => { handleReview(data) }}
                        onSubmit={handleReview}>
                        <label className="label">
                            <span className="text-2xl font3 text-[#FFF1B0]">Briefly express your review.</span>
                        </label>
                        <textarea name="review" className="textarea textarea-bordered h-24 text-lg font2 text-[#FFF1B0] w-full" placeholder="Review in detail"></textarea>
                        <div>
                            <input className='btn border-none bg-[#FFF1B0] hover:bg-[#EB671C] text-center text-[#EB671C] hover:text-[#FFF1B0] py-3 rounded-lg text-xl font-bold' type="submit" value="Send Review" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MealDetails;