import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Readmore from "./Readmore";

function Blog({ filteredData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

 let sliceFilteredData = filteredData.slice(0, count * 4);

  useEffect(() => {
    if (sliceFilteredData != null) {
      setIsLoading(false);
    }
  }, [sliceFilteredData, count]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Latest Blog
        </h1>
        <div className="flex flex-wrap justify-center mb-8">
          {sliceFilteredData.map((item) => (
            <div
              key={item.id}
              className="md:flex bg-gray-700 p-6 w-400 md:w-4/6 rounded-lg mb-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="md:w-1/3 w-full h-48 object-cover rounded-lg mr-6"
              />
              <div className="flex flex-col gap-4 justify-between my-4">
                <div>
                  <h2 className="text-white text-lg font-bold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 mb-2">{item.details}</p>
                  <span className="text-gray-300 mb-4">
                    Category : {item.genre}
                  </span>
                </div>
                <Link
                  to={`/blogdetails/${item.id}`}
                  className="bg-green-500 text-white py-2 px-4 rounded w-20 flex justify-center"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex my-4 justify-center items-center">
      <h2 className="text-white">
        
        </h2>
          {filteredData.length >= count * 4 ? (
            <Readmore setCount={setCount} count={count} />
          ) : (
            null
          )}
        </div>
      </div>
    );
  }
}

export default Blog;
