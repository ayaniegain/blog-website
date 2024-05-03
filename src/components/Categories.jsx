import React from "react";
import { blogsData } from "../data/useData";

function Categories({ category, setFilteredData }) {
  const handleClick = (e) => {
    let categoryItem = e.target.value;

    if (categoryItem === 'All') {
      setFilteredData(blogsData);
    } else {
      let otherFilterData = blogsData.filter((item) => item.genre === categoryItem);
      setFilteredData(otherFilterData);
    }
  };

  return (
    <div className="p-2 flex justify-center flex-wrap border-gray-200 bg-gray-800">
      {category.map((item, index) => (
        <div key={index} className="my-2">
          <button value={item} onClick={handleClick} className="mx-2 inline-flex items-center px-3 py-2 rounded-lg bg-gray-700 hover:bg-blue-800 text-white font-medium text-sm">
            {item}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
