/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../index.css'
import { Link } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id, rating } = item || {}



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
                <h1 className="bg-black text-[#fff1b0] absolute right-4 px-3 py-1 top-2">${price}</h1>
                <div className="card-body">
                    <h2 className="text-2xl text-[#EB671C] text-center font4">{name}</h2>
                    <p className="text-center text-[#FFF1B0] font2">{recipe}</p>
                    <Rating className="mx-auto"
                        style={{ maxWidth: 130 }}
                        value={rating}
                        readOnly
                    />
                    <div className="card-actions justify-center">
                    <Link to={`/meal/${_id}`}><AwesomeButton type='secondary'>View Details</AwesomeButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;