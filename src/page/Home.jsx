import React, { useState, useEffect } from "react";
import Blog from "../components/Blog";
import Layout from "../components/Layout";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import MostView from "../components/MostView";
import { blogsData } from "../data/useData";

function Home() {
  // Category filter
  let genre = blogsData.map((category) => category.genre);
  let category = [...new Set(genre)];
  category = ['All', ...category];

  const [filteredData, setFilteredData] = useState(blogsData); // Initialize with all data

  return (
    <Layout>
      <Categories category={category} setFilteredData={setFilteredData} />
      <Hero />
      <Blog filteredData={filteredData} />
      <MostView />
    </Layout>
  );
}

export default Home;
