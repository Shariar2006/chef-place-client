import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { refetch, data: singleUser = []}= useQuery({
        queryKey: ['singleUser', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user?email=${user.email}`);
            return res.data
        }
    })

    return [singleUser, refetch]
};

export default useUser;