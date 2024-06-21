import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMealsCount = () => {
    const axiosPublic = useAxiosPublic()

    const {data=0} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/mealsCount')
            return res.data
        }
    })


    return data
    
};

export default useMealsCount;