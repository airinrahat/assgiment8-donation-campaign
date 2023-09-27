/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const styles = {
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
};

const Banner = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="lg:bg-[url(https://i.ibb.co/XS02KSb/Rectangle-4281.png)] bg-center bg-no-repeat bg-cover   lg:h-screen lg:pt-0 md:pt-44 pt-40">
      <div
        className="card-body flex items-center justify-center"
        style={styles.content}
      >
        <div>
          <h2 className="mb-4 card-title lg:text-5xl md:text-4xl text-base font-bold text-black">
            I Grow By Helping People In Need
          </h2>

          <div className="text-center mt-8">
            <input
              type="text"
              placeholder="Search here...."
              className="input bg-transparent border-slate-500  rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-[#FF444A] rounded-r-lg text-white p-3 px-6"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
