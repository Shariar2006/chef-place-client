import { Rating } from '@smastrom/react-rating'
import useUpcoming from "../../../Hooks/useUpcoming";

const UpcomingMeals = () => {
    const [upcomingMeal] = useUpcoming()
    console.log(upcomingMeal)
    return (
        <div className='pt-36'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    upcomingMeal?.map(meal =>
                        <div key={meal?._id} className="card w-96 bg-base-100 shadow-xl ">
                            <figure><img src={meal?.image} alt="Shoes" /></figure>
                            <h1 className="bg-black text-white absolute right-4 px-3 py-1 top-2">${meal?.price}</h1>
                            <div className="card-body">
                                <h2 className="text-2xl text-[#EB671C] text-center font4">{meal?.name}</h2>
                                <p className="text-center text-[#FFF1B0] font2">{meal?.recipe}</p>
                                <Rating className="mx-auto"
                                    style={{ maxWidth: 130 }}
                                    value={meal?.rating}
                                    readOnly
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UpcomingMeals;