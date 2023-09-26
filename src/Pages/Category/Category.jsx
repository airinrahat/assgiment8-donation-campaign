/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addToDb } from "../../utilities/fakedb";

const Category = () => {
  const categories = useLoaderData();
  const [category, setCategory] = useState({ categories });
  const [donate, setDonate] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const findCategory = categories?.find((category) => category.id === id);
    setCategory(findCategory);
  }, [id, categories]);

  const { picture_details, title, description, price, text_color } =
    category || {};

  const handleAddToCart = (donates) => {
    const newDonate = [...donate, category];
    setDonate(newDonate);
    addToDb(donates.id);
    toast.success("Donate success! 👍", { autoClose: 500 });
  };
  return (
    <div className="lg:pt-36 pt-44 lg:px-0 md:px-10 px-5">
      <div className="mx-auto max-w-screen-xl">
        <div className="card card-compact w-80% bg-base-100 ">
          <figure className="relative">
            <img
              src={picture_details}
              className="w-full md:h-[500px] h-60 rounded-xl"
              alt="Shoes"
            />
            <div className="card-actions bg-[rgba(11,11,11,0.50)] p-5 absolute left-0 right-0 bottom-0 rounded-b-lx rounded-xl">
              <button
                onClick={() => handleAddToCart(category)}
                className="py-3 px-4  border-none text-lg font-semibold text-white capitalize  rounded "
                style={{ backgroundColor: text_color }}
              >
                Donate {price}
              </button>
              <Toaster />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold md:text-3xl text-2xl">
              {title}
            </h2>
            <p className="font-sans">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
