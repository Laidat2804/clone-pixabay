import React from "react";

const Categories = ({ handleCategoryClick }) => {
  let categories = [
    "Trending",
    "Nature",
    "Technology",
    "People",
    "Animals",
    "Architecture",
    "Travel",
    "Food",
    "Indian",
    "Russian",
  ];

  return (
    <>
      <div className="bg-black/30 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-2.5">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryClick(item)}
                className="px-4 py-1.5 rounded-md bg-zinc-800/60 text-gray-400 text-sm cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
