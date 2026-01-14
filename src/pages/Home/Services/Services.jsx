import React from "react";
import ServiceCard from "./ServiceCard";
import { FaShippingFast, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: FaShippingFast,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: FaGlobeAsia,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: FaWarehouse,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBuilding,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: FaUndo,
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h2 className="font-bold text-3xl">Our Services</h2>
        <p className="max-w-2xl mx-auto opacity-80">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
