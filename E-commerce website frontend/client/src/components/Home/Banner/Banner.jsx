import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <h2>OPEN</h2>
            <p>
              Immerse Yourself in Unparalleled Audio! Unbeatable Deals on
              Headsets! Step into a World of Sonic Delight! Headsets on Sale Now
            </p>
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} alt="" />
        </div>
      </div>
    );
};

export default Banner;
