import React from "react";
import FeatureCard from "./FeatureCard";

import trackingImg from "../../../assets/safe-delivery.png";
import safeImg from "../../../assets/live-tracking.png";
import supportImg from "../../../assets/safe-delivery.png";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Track your parcel in real time from pickup to final delivery with complete transparency and status updates.",
    image: trackingImg,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure secure handling and transportation of your parcels with guaranteed product safety at every step.",
    image: safeImg,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any delivery or tracking concerns.",
    image: supportImg,
  },
];

const Features = () => {
  return (

    <section  className="py-16 ">
        <h3 className="text-4xl font-semibold text-center p-5 ">Our Features</h3>
      <div data-aos="zoom-out-up" className="max-w-7xl mx-auto px-4">

        <div className="  grid grid-rows-3 gap-6">
          {features.map((item, idx) => (
            <FeatureCard
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
