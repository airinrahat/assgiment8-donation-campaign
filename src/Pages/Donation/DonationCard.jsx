/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donated }) => {
  return (
    <div>
      <div
        className="card card-side md:flex-row flex-col gap-3 bg-base-100 md:m-0 m-3"
        style={{ backgroundColor: donated.category_bg }}
      >
        <figure className="md:rounded-none rounded-r-xl">
          <img src={donated.picture_donation} alt="Movie" />
        </figure>
        <div className="card-body p-5">
          <p
            className="w-24 py-1 px-2 font-medium rounded text-center"
            style={{
              backgroundColor: donated.card_bg,
              color: donated.text_color,
            }}
          >
            {donated.category_name}
          </p>
          <p className="text-black font-bold text-2xl">{donated.title}</p>
          <p className="font-bold" style={{ color: donated.text_color }}>
            {donated.price}
          </p>
          <div className="card-actions ">
            <Link to={`/categories/${donated.id}`}>
              <button
                className="btn text-white capitalize text-lg"
                style={{ backgroundColor: donated.text_color }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
