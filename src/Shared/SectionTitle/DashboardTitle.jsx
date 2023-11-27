/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import '../../index.css'

const DashboardTitle = ({ subTitle, headerTitle }) => {
    return (
        <div className="my-10 text-center">
            <h1 className="font3 font-semibold text-2xl md:text-5xl text-[#EB671C]">{headerTitle}</h1>
            <div className="divider font2 text-[#FFF1B0]">Chef's Place</div>
            <p className='font3 text-lg md:text-2xl text-[#EB671C]'>{subTitle}</p>
        </div>
    );
};

export default DashboardTitle;