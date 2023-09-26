/* eslint-disable react/prop-types */
import CategoriesCard from "./CategoriesCard";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 md:gap-0 gap-5 mx-auto max-w-screen-xl ">
        {categories?.map((category) => (
          <CategoriesCard
            key={category.id}
            category={category}
          ></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
