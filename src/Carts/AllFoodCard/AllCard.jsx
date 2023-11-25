/* eslint-disable react/prop-types */

import useMenu from "../../Hooks/useMenu";
import FoodCard from "../MenuCard/FoodCard";

const AllCard = () => {
    const [menu] = useMenu()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                menu?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default AllCard;