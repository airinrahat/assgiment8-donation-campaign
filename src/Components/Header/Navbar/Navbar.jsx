/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Navbar = () => {
  return (
    <div className="absolute right-0 left-0 m-auto top-0 md:px-10 lg:px-0">
      <nav className="md:flex justify-between items-center  mx-auto max-w-screen-xl pt-10">
        <div className="flex justify-center">
          <div>
            <img
              className="w-14 mr-5"
              src="../../../../src/assets/Group.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#FF444A] font-bold text-2xl mb-1">Donation</h2>
            <p className="tracking-[7px] font-medium">Campaign</p>
          </div>
        </div>

        <div className="md:mt-0 mt-4">
          <ul className="flex justify-center gap-5 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
