/* eslint-disable react/no-unescaped-entities */
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import '../../../index.css'
import Swal from "sweetalert2";
import { useState } from "react";

const ServeMeal = () => {
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('')
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['allCarts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allCarts')
            return res.data
        }
    })


    const handleSearch = e => {
        e.preventDefault()
        const form = e.target.value
        setSearch(form)

    }

    console.log(search)

    const handleServe = (id) => {
        if (cart?.status !== 'delivered') {
            axiosPublic.patch(`/cart/${id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Serve!",
                            text: "This food is Serve now",
                            icon: "success"
                        });
                        refetch()
                    }
                })
        } else {
            Swal.fire({
                title: "Serve!",
                text: "This food is Serve now",
                icon: "success"
            });
        }

    }


    return (
        <div className="font3 text-[#F6E9B1]">
            <DashboardTitle subTitle='your Requested Meals' headerTitle='WANNA ADD MORE ?'></DashboardTitle>

            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">Total Order: {cart.length}</h2>

                </div>

                <form onChange={handleSearch} className="p-2">
                <input className="border-2 w-full my-2 p-2 rounded-md" placeholder="Search" type="search" name="" id="">
                </input>
            </form>

                <div className="overflow-x-auto text-sm">

                    <table className="table text-lg">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>Meal Name</th>
                                <th>User Name</th>
                                <th>Email Name</th>
                                <th>Status</th>
                                <th>Serve</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart?.filter((cartItem) => {
                                    return search.toLocaleLowerCase() === '' ? cartItem : cartItem?.email.toLocaleLowerCase().includes(search) || cartItem?.userName.toLocaleLowerCase().includes(search) 
                                    // || parseInt(menuItem?.price).includes(search)
                                })?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        {item?.userName}
                                    </td>
                                    <td className="font2">
                                        {item?.email}
                                    </td>
                                    <td className="text-[#F6E9B1]">
                                        {
                                            item?.status !== 'delivered' ?
                                                <h1 className="text-red-600">{item?.status}</h1> :
                                                <h1 className="text-[#F6E9B1]">{item?.status}</h1>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => { handleServe(item?._id) }}
                                            className="btn btn-ghost btn-lg">Serve</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>

                </div>
            </div>
        </div>
    );
};

export default ServeMeal;