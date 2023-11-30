import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const [trangictionId, setTrangictionId] = useState('')

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

    useEffect(() => {
        console.log(data?.price)
        axiosPublic.post('/create-payment-intent', { price: data?.price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosPublic, data])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        } else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTrangictionId(paymentIntent.id)
                // const payment = {
                //     email: user?.email ,
                //     badge: data?.badge
                // }

                // const updateBadge = await axiosPublic.patch('/userBadge', payment)
                // console.log(updateBadge)
            }
        }
    }

    return (
        <form className="w-1/2 mx-auto my-10" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#F3E6A8',
                            '::placeholder': {
                                color: '#F3E6A8',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                trangictionId && <p>Your Transaction Id: {trangictionId}</p>
            }
            <button className="btn text-xl hover:bg-[#EB671C] text-[#EB671C] bg-[#F3E6A8] hover:text-[#F3E6A8] w-full mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Get Package
            </button>
        </form>
    );
};

export default CheckOutForm;