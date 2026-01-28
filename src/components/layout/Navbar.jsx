import React from "react";

import { Camera, Search, Heart } from "lucide-react";

const Navbar = ({
  query,
  setQuery,
  onSearch,
  favorites,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div>
      <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-3 sm:h-16 sm:py-0">
            <div className="flex items-center justify-between sm:gap-2">
              <div className="flex items-center gap-2">
                <Camera className="text-violet-500" size={24} />
                <span className="text-lg sm:text-xl font-bold text-white">
                  Pixabay
                </span>
              </div>
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className="relative sm:hidden bg-linear-to-r from-violet-600 to-purple-600 text-white px-3 py-2 rounded-lg cursor-pointer text-sm"
              >
                <Heart
                  className="inline-block"
                  size={16}
                  fill={showFavorites ? "currentColor" : "none"}
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>

            <div className="flex-1 sm:max-w-xl">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSearch()}
                  placeholder="Search images..."
                  className="w-full bg-zinc-800/80 text-white px-10 py-2.5 sm:py-2 rounded-lg border border-zinc-700/50 text-sm"
                />
                <button
                  onClick={onSearch}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-linear-to-r from-violet-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-1 rounded-md cursor-pointer text-xs sm:text-sm"
                >
                  Go
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="hidden sm:flex relative bg-linear-to-r from-violet-600 to-purple-600 text-white px-5 py-2 rounded-lg cursor-pointer items-center"
            >
              <Heart
                className="inline-block mr-1.5"
                size={16}
                fill={showFavorites ? "currentColor" : "none"}
              />
              Favorites
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
