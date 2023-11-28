import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useReview = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch: reload, data: review = []}= useQuery({
        queryKey: ['review', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/review?email=${user.email}`);
            return res.data
        }
    })

    return [review, reload]
};

export default useReview;