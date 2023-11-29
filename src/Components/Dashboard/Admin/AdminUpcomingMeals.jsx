import useUpcoming from "../../../Hooks/useUpcoming";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";

const AdminUpcomingMeals = () => {

    const [upcomingMeal] = useUpcoming()

    return (
        <div className="font3 text-[#F6E9B1]">
                <DashboardTitle subtitle="What's new?" headerTitle='Add An Item'></DashboardTitle>
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">Upcoming Meals: {upcomingMeal.length}</h2>
                </div>
                <div className="overflow-x-auto">

                    <table className="table text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                upcomingMeal?.map((user, index) => <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                    </td>
                                    <td>
                                        {user?.name}
                                    </td>
                                    <td className="font2 text-lg">
                                        {user?.email}
                                    </td>
                                    <td>
                                        {user?.badge}
                                    </td>
                                    <th>
                                        {user?.role === 'admin' ? 'Admin' :
                                            <button
                                                // onClick={() => { handleMakeAdmin(user?._id) }}
                                                className="btn btn-ghost btn-lg text-[#EB671C]">Make Admin</button>
                                        }
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

export default AdminUpcomingMeals;