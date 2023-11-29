import useUpcoming from "../../../Hooks/useUpcoming";
import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import MealPost from "./MealPost";

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
                                <th>Image</th>
                                <th>Meal Name</th>
                                <th>Ingredients</th>
                                <th>Post Meal</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                upcomingMeal?.map((item, index) => <MealPost key={item?._id} index={index} item={item}></MealPost>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AdminUpcomingMeals;