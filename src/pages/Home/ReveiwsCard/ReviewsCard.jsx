import React from "react";
import image from '../../../assets/reviewQuote.png'

const ReviewCard = ({ review, name, position }) => {
  return (
    <div className="w-80 bg-base-200 p-6 rounded-2xl shadow flex flex-col justify-between h-full">
      
      <img className="h-[48px] w-[48px]" src={image} alt="" />
      <p className="text-sm leading-relaxed opacity-90">
        “{review}”
      </p>

      {/* Author info */}
      <div className="mt-6 border-t pt-4">
        <h4 className="font-semibold text-sm">
          {name}
        </h4>
        <p className="text-xs opacity-70">
          {position}
        </p>
      </div>

    </div>
  );
};

export default ReviewCard;
