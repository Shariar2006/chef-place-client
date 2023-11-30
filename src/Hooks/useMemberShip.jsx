import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMemberShip = () => {
    const axiosPublic = useAxiosPublic()
    const { data: premiumPackage = []}= useQuery({
        queryKey: ['memberShip'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/memberShip');
            return res.data
        }
    })

    return [premiumPackage]
};

export default useMemberShip;