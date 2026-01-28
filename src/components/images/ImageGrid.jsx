import React from "react";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images, onToggleFavorite, isFavorite }) => {
  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-0">
        {images.map((img, idx) => (
          <ImageCard
            key={idx}
            img={img}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite(img.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
