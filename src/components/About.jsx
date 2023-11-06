import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          A Healthy gut equals a healthy mind, body and spirit
        </h1>
        <p className="primary-text">
          A balanced diet provides all essential nutrients, including vitamins,
          minerals, proteins, carbohydrates, and fats, each of which plays a
          crucial role in the body's functioning. For instance, proteins are
          crucial for muscle and tissue repair, while carbohydrates provide
          energy.
        </p>
        <p className="primary-text">
          Welcome to a world where every meal is not just a feast for your taste
          buds but a gift of health to your body.We've crafted a unique blend of
          ingredients that ensures you receive all the essential nutrients your
          body needs.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
