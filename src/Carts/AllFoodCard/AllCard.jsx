/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
// import useMealsCount from "../../Hooks/useMealsCount";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../MenuCard/FoodCard";

const AllCard = () => {
    const [menu] = useMenu()
    const [meals, setMeals] = useState([]);
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

    useEffect(()=>{
        fetch(`http://localhost:5000/allMeals?page=${currentPage}&size=${mealsPerPage}`)
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[currentPage, mealsPerPage])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                meals?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
        <div>
            <p>current page: {currentPage}</p>
            {
                pages?.map(page=><button onClick={() => {setCurrentPage(page)}} className={currentPage=== page ? "btn ml-2 mt-14 hover:text-[#EB671C] hover:bg-[#F3E6A8] text-[#EB671C] bg-[#F3E6A8]" : "btn ml-2 mt-14 bg-[#EB671C] text-[#F3E6A8] hover:text-[#EB671C] hover:bg-[#F3E6A8]"} key={page}>{page}</button>)
            }
        </div>
        </div>
    );
};

export default AllCard;