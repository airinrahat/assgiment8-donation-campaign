/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
  const donated = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const hnadleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div className="pt-20 md:px-10 lg:px-0">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="md:text-4xl text-3xl text-center py-10 font-semibold md:mt-0 mt-10">
            <u>Total Donation : {donated.length}</u>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {donated.slice(0, showAll ? donated.length : 4).map((donated) => (
              <DonationCard key={donated.id} donated={donated}></DonationCard>
            ))}
          </div>
          <div className="text-center py-5">
            {!showAll && (
              <span onClick={hnadleShowAll}>
                <button className="btn bg-[#009444] text-white capitalize">
                  See All
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
