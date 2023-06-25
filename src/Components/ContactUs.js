import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion/dist/framer-motion";
import { SiGmail } from "react-icons/si"

const ContactUs = () => {

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  }

  return (
    <motion.div 
        className="contact-us"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
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
