import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-start gap-3">
      <div className="text-4xl text-primary">
        <Icon />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm opacity-80 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
