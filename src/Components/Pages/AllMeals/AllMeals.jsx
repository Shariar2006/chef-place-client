import { useState } from "react";
import FoodCard from "../../../Carts/MenuCard/FoodCard";
import useMenu from "../../../Hooks/useMenu";
// import InfiniteScroll from 'react-infinite-scroll-component';



const AllMeals = () => {
    const [search, setSearch] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        const form = e.target.value
        setSearch(form)

    }

    console.log(search)

    // const [dataSource, setDataSource] = useState(Array.from({ length: 6 }))

    const [menu] = useMenu()
    return (
        <div className="pt-36">
            {/* <InfiniteScroll
                dataLength={dataSource.length}
                // // next={menu}
                // hasMore={true}
                loader={<h4>Loading...</h4>}
            // endMessage={
            //   <p style={{ textAlign: 'center' }}>
            //     <b>Yay! You have seen it all</b>
            //   </p>
            // }
            >
                {
                    dataSource.map((scrollItem) => {
                        return 
                    })
                }
            </InfiniteScroll> */}

            <form onChange={handleSearch} className="p-2">
                <input className="border-2 w-full my-2 p-2 rounded-md" placeholder="Search" type="search" name="" id="">
                </input>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    menu?.filter((menuItem) => {
                        return search.toLocaleLowerCase() === '' ? menuItem : menuItem?.category.toLocaleLowerCase().includes(search) || menuItem?.name.toLocaleLowerCase().includes(search) 
                        // || parseInt(menuItem?.price).includes(search)
                    }).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default AllMeals;