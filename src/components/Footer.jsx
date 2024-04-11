// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCopyright, FaLinkedin ,FaGithub, FaInstagram} from "react-icons/fa6";

const Footer = () => {
  return (
    <main>
      <div className="footer-section">
        <div className="footer-content1">
          <h3>FlavorFusion.com</h3>
          <p>
            FlavorFusion is a place where you can please your soul and palate
            with delicious food recipes of all cuisines. All-in-one culinary
            companion that brings a world of delightful recipes to your
            fingertips. And our professional service is absolutely free. So
            start exploring now!
          </p>
          <p className="copyright">
            <FaCopyright />
            2024|FlavorFusion.com|All Rights Reserved
          </p>
        </div>

        <div className="footer-content2">
          <h3>Contact Us</h3>
          <div className="p-coll">
            <p>FlavorFusion@gmail.com</p>
            <p>+91-7835288210</p>
            <p>Yugandhar, Hyderabad</p>
          </div>
        </div>

        <div className="footer-content3">
          <h3>Socials</h3>
          <div className="p-coll">
            <a
              href="https://github.com/YugandharNaik22"
              target="_blank"
              rel="noopener noreferrer"
              className="iconss"
            >
              GitHub<FaGithub className="log"></FaGithub>
            </a>
            <a
              href="https://linkedin.com/in/anji-naik-28a9142ab"
              target="_blank"
              rel="noopener noreferrer"
              className="iconss"
            >
              Linkedin<FaLinkedin className="log"></FaLinkedin>
            </a>
            <a
              href="https://instagram.com/it_call_me_lucky"
              target="_blank"
              rel="noopener noreferrer"
              className="iconss"
            >
              Instagram<FaInstagram className="log"></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
