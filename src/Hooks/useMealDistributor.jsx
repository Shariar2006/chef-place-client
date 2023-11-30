import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxiosSecure from "./useAxiosSecure";

const useMealDistributor = () => {
    const axiosSecure = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {  data = {}}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/mealDistributor?email=${user.email}`);
            return res.data
        }
    })

    return [data]
};

export default useMealDistributor;