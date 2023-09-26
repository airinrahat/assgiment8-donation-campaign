import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
// import Donation from "../Pages/Donation/Donation";

const MainLayout = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="pb-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
