import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import banner from "../../../assets/video/bg.jpg";
const Video = () => {
  return (
    <section
      className="py-5 text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center my-5">
        <h3 className="text-uppercase h6">Welcome to Green Plant</h3>
        <p className="fs-1 font-bold">Garden From Our Heart.</p>
        <button className="btn btn-green text-white font-bold d-flex justify-content-center align-items-center mx-auto gap-2 px-3 py-2 fs-4">
          <FaPlayCircle />
          Play Video
        </button>
      </div>
    </section>
  );
};

export default Video;
