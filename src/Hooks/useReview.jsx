import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReview = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { refetch: reload, data: review = []}= useQuery({
        queryKey: ['review', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/review?email=${user.email}`);
            return res.data
        }
    })

    return [review, reload]
};

export default useReview;