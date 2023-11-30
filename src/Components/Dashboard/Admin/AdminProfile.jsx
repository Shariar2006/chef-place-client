import DashboardTitle from "../../../Shared/SectionTitle/DashboardTitle";
import useUser from "../../../Hooks/useUser";
import '../../../index.css'
import useMealDistributor from "../../../Hooks/useMealDistributor";

const AdminProfile = () => {
    const [singleUser] = useUser()
    const [data] = useMealDistributor()
    return (
        <div>
            <DashboardTitle headerTitle='hi, Welcome back!' subTitle='my profile'></DashboardTitle>

            {
                singleUser?.map((user) => 
                    <div key={user._id} className="hero pt-20">
                        <div className="hero-content flex-col lg:flex-row ">
                            {
                                user?.photo ? 
                                <img src={user?.photo} className="lg:mr-10 w-72  rounded-full shadow-2xl" /> :
                                <img className="lg:mr-10 w-72  rounded-full shadow-2xl" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                            }
                            <div className="space-y-2">
                                
                                <div className="mb-5">
                                    <h4 className="text-lg text-[#FFF1B0] font3 font-semibold">Full Name</h4>
                                    <h2 className="text-3xl text-[#EB671C] font3 font-semibold">{user?.name}</h2>
                                </div>
                                <div className="mb-5">
                                    <h4 className="text-lg text-[#FFF1B0] font3 font-semibold">Email Address</h4>
                                    <h2 className="text-2xl text-[#EB671C] font2 font-semibold">{user?.email}</h2>
                                </div>
                                <div className="mb-5">
                                    <h4 className="text-lg text-[#FFF1B0] font3 font-semibold">Number of your added meal</h4>
                                    <h2 className="text-2xl text-[#EB671C] font2 font-semibold">{data?.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default AdminProfile;