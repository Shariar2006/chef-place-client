/* eslint-disable react/prop-types */
import { RiVerifiedBadgeFill } from "react-icons/ri";


const ProfileBage = ({ userBadge }) => {

    const { badge } = userBadge || {}

    return (
        <div className="mb-5">
            <h4 className="text-lg text-[#FFF1B0] font3 font-semibold">Your Badge</h4>
            <h2 className="text-3xl text-[#EB671C] font3 font-semibold flex">
                <span>
                    {
                        badge === 'Bronze' ? <p className="text-[#B77231]"><RiVerifiedBadgeFill></RiVerifiedBadgeFill></p> : ''
                    }
                    {
                        badge === 'Gold' ? <p className="text-[#f4c966]"><RiVerifiedBadgeFill></RiVerifiedBadgeFill></p> : ''
                    }
                </span>
                {badge}</h2>

        </div>
    );
};

export default ProfileBage;