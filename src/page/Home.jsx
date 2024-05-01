import React from "react";

import Blog from "../components/Blog";
import Layout from "../components/Layout";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import MostView from "../components/MostView";

function Home() {
  return (
    <Layout>
      <Categories />
      <Hero />
      <Blog />
      <MostView />
    </Layout>
  );
}

export default Home;
