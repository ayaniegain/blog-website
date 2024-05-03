import React from "react";
import { blogsData } from "../data/useData";

function Categories() {
  return (
    <div className=" p-2 flex  justify-center flex-wrap  border-gray-200 bg-gray-800">
      {blogsData.map((item) => (
        <div key={item.id} className="my-2">
          <button className="mx-2 inline-flex items-center px-3 py-2 rounded-lg bg-gray-700 hover:bg-blue-800 text-white font-medium text-sm">
            {item.genre}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
