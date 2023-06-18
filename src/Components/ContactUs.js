import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion/dist/framer-motion";
import { SiGmail } from "react-icons/si"

const ContactUs = () => {
  return (
    <motion.div 
        className="contact-us"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h2>Contact Us</h2>
      <ul className="contacts-list">
        <li>
          <a href="#">
            <FaFacebook className="contact-logo"/>
            <span className="contact-name">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className="contact-logo"/>
            <span className="contact-name">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SiGmail className="contact-logo"/>
            <span className="contact-name">Gmail</span>
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactUs;
