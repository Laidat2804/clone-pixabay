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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryClick(item)}
                className="px-3 sm:px-4 py-1.5 rounded-md bg-zinc-800/60 text-gray-400 text-xs sm:text-sm cursor-pointer hover:bg-zinc-700/60 transition whitespace-nowrap shrink-0"
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
