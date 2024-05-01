import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data/useData";
import Layout from "./Layout";

function BlogDetails() {
  let { blogId } = useParams();

  let singledata = blogsData.find((item) => item.id == blogId);

  let { author, title, details } = singledata;

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{details}</p>
      </div>
    </Layout>
  );
}

export default BlogDetails;
