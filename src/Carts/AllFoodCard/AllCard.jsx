/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
// import useMealsCount from "../../Hooks/useMealsCount";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../MenuCard/FoodCard";

const AllCard = () => {
    const [menu] = useMenu()
    // const data = useMealsCount()
    const [countPage, setCountPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const mealsPerPage = 9;
    const numberOfPages = Math.ceil(countPage / mealsPerPage)

    const pages = [...Array(numberOfPages).keys()];
    

    useEffect(()=>{
        fetch('http://localhost:5000/mealsCount')
        .then(res=>res.json())
        .then(data=>setCountPage(data.count))
    },[])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                menu?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
        <div>
            {
                pages?.map(page=><button className="btn ml-2" key={page}>{page}</button>)
            }
        </div>
        </div>
    );
};

export default AllCard;