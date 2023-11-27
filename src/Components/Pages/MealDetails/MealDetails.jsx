import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import '../../../index.css'
import { AwesomeButton } from "react-awesome-button";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useCart from "../../../Hooks/useCart";

const MealDetails = () => {
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
            name: data.name,
            image: data.image,
            price: data.price,
            like: 0,
            review: 0,
            status: 'Pending'
        }
        axiosPublic.post('/carts', cartItem)
        .then(res=>{
            console.log(res,res.data)
            if(res.data.insertedId){
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

        </div>
    );
};

export default MealDetails;