import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>

    );
};

export default MainLayout;