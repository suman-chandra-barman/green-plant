import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FeedBackCard from "./FeedBackCard";

const FeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://green-plant-server.vercel.app/feedbacks").then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
          setFeedbacks(data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    <section className="py-5 px-2" style={{ backgroundColor: "#e0f2da" }}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2>What Our Customers Says ?</h2>
          <p className="w-75 mx-auto">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Is That It Has A More-Or-Less Normal Dist
          </p>
        </div>

        {/* carousel section  */}
        <div>
          <div className="row g-4">
            <Slider {...settings}>
              {feedbacks.map((feedback) => (
                <FeedBackCard key={feedback._id} feedback={feedback} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
