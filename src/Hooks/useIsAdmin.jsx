import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useIsAdmin = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSource = useAxiosSecure()
    console.log(user?.email)
    const { data: isAdmin, isPending: adminIsLoading } = useQuery({
        queryKey: [ 'isAdmin', user?.email ],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSource.get(`/user/admin/${user?.email}`)
            console.log(res?.data)
            return res.data?.admin;
        },
    })
    return [isAdmin, adminIsLoading]
};

export default useIsAdmin;