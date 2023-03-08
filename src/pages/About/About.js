import React from "react";
import img from "../../assets/about/about.jpg";

const About = () => {
  return (
    <section className="my-5 container mx-auto">
      <div className="row" data-aos="fade-up">
        <div className="col-sm-12 col-lg-6">
          <figure>
            <img src={img} className="img-fluid w-100" alt="Banner" />
          </figure>
        </div>
        <div className="col-sm-12 col-lg-6" style={{ fontSize: "18px" }}>
          <h2 className="text-center fs-3 text-uppercase color-green fw-bold ">
            About Us
          </h2>
          <h4 className="text-center mb-lg-3">Welcome to Green Plant</h4>
          <p>
            We work hard to provide you the best quality plants and planters At
            Green Plant. Green Plant is the source that bridges the gap between
            nature and people, offering products and services that fit with your
            personal style, your lifestyle and your budget.
          </p>
          <p>
            We really believe that bringing the natural world into your home,
            office, or living space will increase your quality of life. We are
            here to help strengthen your life long relationship with plants and
            nature. We make buying plants, planters and accessories very easy by
            delivering healthy, ready-to-go plants and others to your doorstep.
            Every plant and products from our company come with simple care
            instruction, real-time support, direct access to our team of
            experts, and our guarantee to be there every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
