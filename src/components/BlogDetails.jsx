import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data/useData";
import Layout from "./Layout";

function BlogDetails() {
  let { blogId } = useParams();

  let singledata = blogsData.find((item) => item.id == blogId);

  let { author, title, details,image,genre } = singledata;

  return (
    <Layout>
      <div className="max-w-4xl  h-screen mx-auto py-10">
      <div className="bg-white shadow-md rounded-lg my-20 overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">by {author}</p>
          <p className="mt-4 text-gray-700">{details}</p>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {genre}
            </span>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default BlogDetails;
