import React from "react";
import { FaAmbulance, FaCreditCard, FaAddressCard } from "react-icons/fa";

const ShoppingArea = () => {
  const services = [
    {
      icon: <FaAmbulance />,
      title: "Free Delivery",
      describe: "Free shipping around the world for all orders over $120",
    },
    {
      icon: <FaCreditCard />,
      title: "Safe Payment",
      describe: "With our payment gateway, don’t worry about your information",
    },
    {
      icon: <FaAddressCard />,
      title: "Friendly Services",
      describe: "You have 30-day return guarantee for every single order",
    },
  ];
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          {services.map((service, id) => (
            <div key={id} className="col-sm-12 col-md-6 col-lg-4 mt-2 mt-lg-0">
              <div className="d-flex align-items-center justify-content-between gap-3 border p-2 shadow-sm rounded">
                <p className="color-green" style={{ fontSize: "70px" }}>
                  {service.icon}
                </p>
                <div>
                  <h4 className="font-semibold">{service.title}</h4>
                  <p>{service.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingArea;
