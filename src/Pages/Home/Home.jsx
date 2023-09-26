/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter categories based on the search query
    const filtered = categories.filter((category) =>
      category.category_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <div>
      <Banner onSearch={handleSearch} />
      <Categories categories={searchQuery ? filteredCategories : categories} />
    </div>
  );
};

export default Home;
