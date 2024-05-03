import React from 'react';
import { blogsData } from "../data/useData";
import { Link } from 'react-router-dom';

function MostView() {
  return (
    <div className="bg-gray-900  px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Most Viewed
      </h1>

      <div className="flex flex-wrap justify-center mb-8">
        {blogsData.map((item) => (
          <div key={item.id} className="flex flex-col bg-gray-700 p-6 rounded-lg mb-6 mr-4 max-w-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div>
              <h2 className="text-white text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.details}</p>
              <Link
                to={`/blogdetails/${item.id}`}
                className="bg-green-500 text-white py-2 px-4 rounded w-full text-center"
              >
                View
              </Link>
            </div>
            </div>
        ))}
      </div>

      <div className="flex justify-center items-center pb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Read more</button>
    </div>
    </div>
  );
}

export default MostView;
