import Banner from "./Banner";
import MealsTabCategory from "./MealsTabCategory";
import MemberShip from "./MemberShip";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <MealsTabCategory></MealsTabCategory>
            <MemberShip></MemberShip>

            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <img src="https://nus.edu.sg/osa/images/default-source/osa/1.1/hostel-admission/mealplans.jpg?sfvrsn=ea81ea7a_2" alt="" />
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                        <h2 className=" font-bold text-[#EB671C] tracking-wider text-4xl mb-3">Why Choose Us</h2>
                        
                            <div className="text-[#F3E6A8] ">
                            <li>Our food quality is very good</li>
                        <li>Meals are served as per the package</li>
                        <li>We keep everything clean</li>
                        <li>We strive to meet all nutritional needs of students</li>
                        <li>Showcases a diverse range of menu options, including vegetarian, vegan, and special dietary choices, ensuring there's something for everyone.</li>
                            </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;