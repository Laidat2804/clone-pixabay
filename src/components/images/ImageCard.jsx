import React from "react";

import { Download, Heart, Eye } from "lucide-react";
import { downloadImage } from "../../services/download.service";

const ImageCard = ({ img, onToggleFavorite, isFavorite }) => {
  const handleDownload = async (e) => {
    e.stopPropagation();
    const fileName = `pixabay-${img.id}.jpg`;
    await downloadImage(img.webformatURL, fileName);
  };
  return (
    <>
      <div className="group relative break-inside-auto mb-2 sm:mb-3 lg:mb-4 cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-zinc-800">
          <img
            src={img.webformatURL}
            className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-linear-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {img.user.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium truncate">
                    {img.user}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-white text-xs shrink-0">
                  <span className="flex items-center gap-0.5 sm:gap-1">
                    <Heart
                      size={10}
                      fill="currentColor"
                      className="text-red-400"
                    />{" "}
                    {img.likes}
                  </span>
                  <span className="hidden sm:flex items-center gap-1">
                    <Eye size={10} className="text-blue-400" />
                    {img.views}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="absolute top-2 right-2 bg-black/60 backdrop-blur text-white p-1.5 sm:p-2 rounded-md opacity-0 group-hover:opacity-100 transition hover:bg-black/50 cursor-pointer"
            title="Tải ảnh về"
          >
            <Download size={14} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(img);
            }}
            className="absolute top-2 left-2 bg-black/50 backdrop-blur text-white p-1.5 sm:p-2 rounded-md hover:bg-black/30 transition opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <Heart
              size={14}
              fill={isFavorite ? "currentColor" : "none"}
              className={isFavorite ? "text-red-500" : "text-white"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
