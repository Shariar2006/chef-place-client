import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import '../../../index.css'
import { AwesomeButton } from "react-awesome-button";

const MealDetails = () => {
    const axiosPublic = useAxiosPublic()

    const { id } = useParams()

    const { data = {} } = useQuery({
        queryKey: ['meal-details'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meal/${id}`)
            return res.data
        }
    })
console.log(data)

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

                        <div className="card-actions justify-center font3">
                            <AwesomeButton type='secondary'>Meal request</AwesomeButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MealDetails;