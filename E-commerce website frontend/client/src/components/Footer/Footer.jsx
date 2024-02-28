import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Shopping at BOOMBOX STORE is not just about purchasing a product;
              it's about embarking on a sonic journey. We invite you to explore
              our carefully curated selection, discover the latest advancements
              in audio technology, and unlock a world of captivating sound.Join
              us as we redefine what it means to truly hear. Experience the
              difference with BOOMBOX STORE.
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                23 Sound Avenue, Harmony City, Melodyland, 98765
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: +1 (555) 123-4567</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: BoomBoxStore@gmail.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              BOOMBOX STORE 2023 CREATED BY SWETA AND MAYANK PREMIUM E-COMMERCE
              SOLUTIONS.
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Footer;
