import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="flex items-center bg-base-100 rounded-xl shadow p-6 gap-6 w-full">
      
      
      <div className="w-24 h-24  flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

     
      <div className="space-y-2 text-center ml-10">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
        <p className="  opacity-80 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default FeatureCard;
