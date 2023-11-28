import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch, data: cart = []}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/carts?email=${user.email}`);
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;