import React from "react";

const ImageCard = ({ url }) => {
  return (
    <div className="imagecard">
      <img src={url} alt="" />
    </div>
  );
};

export default ImageCard;
