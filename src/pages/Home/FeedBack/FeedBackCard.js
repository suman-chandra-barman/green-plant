import React from "react";

const FeedBackCard = ({ feedback }) => {
  const { image, name, title, message } = feedback;
  return (
    <div className="border border-1 p-3 m-2 text-center rounded bg-white">
      <div className="mx-auto">
        <img src={image} alt="Client" className="mx-auto" />
      </div>
      <div className="mt-3">
        <p>{message}</p>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FeedBackCard;
