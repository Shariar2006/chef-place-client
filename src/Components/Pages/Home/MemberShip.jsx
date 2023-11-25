import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import '../../../index.css'

const MemberShip = () => {
    return (
        <div className="shadow-lg py-5 mb-5">
            <SectionTitle subTitle='Pay to join us' headerTitle='Member Ship'></SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">

                <div className="w-[375px] text-center text-[#EB671C] border-l-2 border-r-2">
                    <h1 className="font4 text-3xl bg-[#F3E6A8] py-2">Silver</h1>
                    <h1 className="font4 my-5 text-8xl">$ 19.99</h1>
                    <hr />
                    <div className="my-2">
                        <p className="font4 text-2xl">Package Status : 2 days per week</p>
                        <p className="font4 text-2xl my-2">Special menu of this package</p>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Tiffin:</span> <br /> Fruit juice
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Evening Snakes:</span> <br /> Chicken Noodles.
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Lunch:</span> <br /> Chicken Jali Kabab, Misty Dahi.
                        </div>
                    </div>
                    <button className="w-full text-2xl font-semibold font2 py-2 hover:bg-[#EB671C] text-[#EB671C] bg-[#F3E6A8] hover:text-[#F3E6A8] ">Check Out Package</button>
                </div>
                <div className="w-[375px] text-center text-[#EB671C] border-l-2 border-r-2">
                    <h1 className="font4 text-3xl bg-[#F3E6A8] py-2">Gold</h1>
                    <h1 className="font4 my-5 text-8xl">$ 39.99</h1>
                    <hr />
                    <div className="my-2">
                        <p className="font4 text-2xl">Package Status : 4 days per week</p>
                        <p className="font4 text-2xl my-2">Special menu of this package</p>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Tiffin:</span> <br /> Fruit juice
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Evening Snakes:</span> <br /> Chicken Noodles, Muffin.
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Lunch:</span> <br /> Chicken Jali Kabab, Misty Dahi, Egg Curry, Chicken Pasta.
                        </div>
                    </div>
                    <button className="w-full text-2xl font-semibold font2 py-2 hover:bg-[#EB671C] text-[#EB671C] bg-[#F3E6A8] hover:text-[#F3E6A8] ">Check Out Package</button>
                </div>
                <div className="w-[375px] text-center text-[#EB671C] border-l-2 border-r-2">
                    <h1 className="font4 text-3xl bg-[#F3E6A8] py-2">Platinum</h1>
                    <h1 className="font4 my-5 text-8xl">$ 69.99</h1>
                    <hr />
                    <div className="my-2">
                        <p className="font4 text-2xl">Package Status : Full Month</p>
                        <p className="font4 text-2xl my-2">Special menu of this package</p>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Tiffin:</span> <br /> Fruit juice
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Evening Snakes:</span> <br /> Chicken Noodles, Muffin, Doughnut and Fruit Juice.
                        </div>
                        <div className="font2 font-medium text-xl ">
                            <span className="font-bold">Lunch:</span> <br /> Buffet lunch, which will consist of 30 items
                        </div>
                    </div>
                    <button className="w-full text-2xl font-semibold font2 py-2 hover:bg-[#EB671C] text-[#EB671C] bg-[#F3E6A8] hover:text-[#F3E6A8] ">Check Out Package</button>
                </div>


            </div>


        </div>
    );
};

export default MemberShip;