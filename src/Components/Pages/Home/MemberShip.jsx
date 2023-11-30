import { Link } from "react-router-dom";
import useMemberShip from "../../../Hooks/useMemberShip";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import '../../../index.css'

const MemberShip = () => {


    const [premiumPackage] = useMemberShip()



    return (
        <div className="shadow-lg py-5 mb-5">
            <SectionTitle subTitle='Pay to join us' headerTitle='Member Ship'></SectionTitle>



            <div className="hero  bg-fixed " style={{ backgroundImage: 'url(https://pbs.twimg.com/media/DZYFoRmWsAA8oVK.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 ">

                        {
                            premiumPackage.map(singlePackage => <div key={singlePackage.badge} className="w-[375px] text-center text-[#EB671C] border-l-2 border-r-2">
                                <h1 className="font4 text-3xl bg-[#F3E6A8] py-2">{singlePackage?.badge}</h1>
                                <h1 className="font4 my-5 text-8xl">$ {singlePackage?.price}<span className="text-lg">/month</span></h1>
                                <hr />
                                <div className="my-2 h-[304px] text-[#F3E6A8]">
                                    <p className="font4 text-2xl">Package Status : {singlePackage?.packageStatus}</p>
                                    <p className="font4 text-2xl my-2">Special menu of this package</p>
                                    <div className="font2 font-medium text-xl ">
                                        <span className="font-bold">Tiffin:</span> <br /> {singlePackage?.tiffin}
                                    </div>
                                    <div className="font2 font-medium text-xl ">
                                        <span className="font-bold">Evening Snakes:</span> <br /> {singlePackage?.eveningSnakes}
                                    </div>
                                    <div className="font2 font-medium text-xl ">
                                        <span className="font-bold">Lunch:</span> <br /> {singlePackage?.lunch}
                                    </div>
                                </div>
                                <Link to={`/checkOut/${singlePackage?.badge}`}>

                                    <button className="w-full text-2xl font-semibold font2 py-2 hover:bg-[#EB671C] text-[#EB671C] bg-[#F3E6A8] hover:text-[#F3E6A8] ">Check Out Package</button>
                                </Link>
                            </div>)
                        }

                    </div>
                </div>
            </div>





        </div>
    );
};

export default MemberShip;