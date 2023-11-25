import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../../public/banner1.png'
import banner2 from '../../../../public/banner2.png'
import banner3 from '../../../../public/banner3.png'
import '../../../index.css'

const Banner = () => {
    return (
        <Carousel className="text-center shadow-lg" autoPlay={true} infiniteLoop={true} autoFocus={true}>
            <div className="relative ">
                <div className="absolute text-gray-100 pt-16 md:pt-36 lg:pt-48 pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <h1 className="bg-none text-[#EB671C] text-xl md:text-5xl lg:text-8xl font4 text-start">Eat Healthy <br /> <span className="font1">& Live Well</span></h1>
                    <p className="font2 text-[#FFF1B0] text-xs md:text-base lg:text-3xl text-start md:mt-5">Healthy food is food that gives you all the <br /> nutrients you need to stay healthy, feel well and have plenty of energy.</p>
                </div>
                <img src={banner1} />

            </div>
            <div className="relative">
                <div className="absolute text-gray-100 pt-16 md:pt-36 lg:pt-48 pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <h1 className=" bg-none text-[#EB671C] text-xl md:text-5xl lg:text-8xl font4 text-start">Eat Healthy <br /> <span className="font1">& Live Well</span></h1>
                    <p className="font2 text-[#FFF1B0] text-xs md:text-base lg:text-3xl text-start md:mt-5">Healthy food is food that gives you all the <br /> nutrients you need to stay healthy, feel well and have plenty of energy.</p>
                </div>
                <img src={banner2} />
            </div>
            <div className="relative">
                <div className="absolute text-gray-100 pt-16 md:pt-36 lg:pt-48 pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <h1 className=" bg-none text-[#EB671C] text-xl md:text-5xl lg:text-8xl font4 text-start">Eat Healthy <br /> <span className="font1">& Live Well</span></h1>
                    <p className="font2 text-[#FFF1B0] text-xs md:text-base lg:text-3xl text-start md:mt-5">Healthy food is food that gives you all the <br /> nutrients you need to stay healthy, feel well and have plenty of energy.</p>
                </div>
                <img src={banner3} />
            </div>
        </Carousel>
    );
};

export default Banner;