import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";

const useUpcoming = () => {
    const axiosPublic = useAxiosPublic()


    const {data: upcomingMeal = [], isPending: loading, refetch} = useQuery({
        queryKey: ['upcomingMeal'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/upcomingMeal')
            return res.data
        }
    })


    return [upcomingMeal, loading, refetch]
};

export default useUpcoming;