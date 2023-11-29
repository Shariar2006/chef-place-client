import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch, data: cart = []}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;