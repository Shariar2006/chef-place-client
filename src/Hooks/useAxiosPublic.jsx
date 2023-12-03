import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://chef-place-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;