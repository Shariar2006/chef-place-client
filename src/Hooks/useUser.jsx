import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch, data: singleUser = []}= useQuery({
        queryKey: ['singleUser', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users?email=${user.email}`);
            return res.data
        }
    })

    return [singleUser, refetch]
};

export default useUser;