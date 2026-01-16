import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 space-y-8">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center">
          Trusted by Our Clients
        </h2>

        {/* Marquee */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="mx-12 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="client logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default ClientLogos;
