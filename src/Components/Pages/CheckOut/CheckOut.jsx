import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import '../../../index.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_TOKEN);


const CheckOut = () => {
    const { badge } = useParams()
    console.log(badge)
    const axiosPublic = useAxiosPublic()


    const { data = {} } = useQuery({
        queryKey: ['check-out'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/checkOut/${badge}`)
            return res.data
        }
    })

    console.log(data)

    return (
        <div >
            <div className="hero min-h-[80vh] bg-base-200 pt-36">
                <div className="hero-content flex-col ">
                    <h1 className="font4 text-6xl text-[#EB671C]">{data?.badge}</h1>
                    <h1 className="font4 my-5 text-8xl">$ {data?.price}<span className="text-lg">/month</span></h1>

                    <div className="my-2 h-[304px] text-[#F3E6A8]">
                        <p className="font4 text-2xl">Package Status : {data?.packageStatus}</p>
                        <p className="font4 text-2xl my-2">Special menu of this package</p>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Tiffin:</span> <br /> {data?.tiffin}
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Evening Snakes:</span> <br /> {data?.eveningSnakes}
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Lunch:</span> <br /> {data?.lunch}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>

        </div>
    );
};

export default CheckOut;