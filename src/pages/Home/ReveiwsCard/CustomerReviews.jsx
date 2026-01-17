import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewsCard";


const reviews = [
  {
    review:
      "Fast delivery and excellent service. My parcels always arrive on time without any damage.",
    name: "Rahim Uddin",
    position: "Online Seller",
  },
  {
    review:
      "Their live tracking system gives me peace of mind. I can monitor every shipment easily.",
    name: "Nusrat Jahan",
    position: "E-commerce Manager",
  },
  {
    review:
      "Customer support is very responsive and helpful. They solved my issue within minutes.",
    name: "Tanvir Hasan",
    position: "Small Business Owner",
  },
  {
    review:
      "Reliable delivery partner for my business. Cash on delivery works smoothly every time.",
    name: "Sadia Akter",
    position: "Facebook Shop Owner",
  },
  {
    review:
      "Professional handling of parcels and fast response time. Highly recommended.",
    name: "Mehedi Islam",
    position: "Retail Merchant",
  },
  {
    review:
      "Their nationwide delivery coverage helped my business grow across districts.",
    name: "Ayesha Rahman",
    position: "Entrepreneur",
  },
  {
    review:
      "Safe packaging and on-time delivery. I trust them with valuable shipments.",
    name: "Shafiq Ahmed",
    position: "Wholesale Supplier",
  },
  {
    review:
      "Very smooth return process. Reverse logistics is fast and hassle-free.",
    name: "Farhan Chowdhury",
    position: "Dropshipper",
  },
  {
    review:
      "Affordable pricing with premium service quality. Great experience overall.",
    name: "Jannatul Ferdous",
    position: "Startup Founder",
  },
  {
    review:
      "Best logistics partner I’ve worked with. Consistent and dependable service.",
    name: "Imran Hossain",
    position: "Operations Manager",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-lime-100 rounded-2xl mt-4">
      <div className="max-w-7xl mx-auto px-4 space-y-10">

       
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            What our customers are saying
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Trusted by thousands of customers for fast, secure, and reliable
            parcel delivery services across the country.
          </p>
        </div>

       
        <Marquee
          speed={40}
          pauseOnHover
          gradient={false}
        >
          {reviews.map((item, idx) => (
            <div key={idx} className="mx-6">
              <ReviewCard
                review={item.review}
                name={item.name}
                position={item.position}
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default CustomerReviews;
