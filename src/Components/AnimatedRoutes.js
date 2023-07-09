import React from "react"
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import ContactUs from "./ContactUs";
import ConversionModal from "./ConversionModal"
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.key}>
            <Route path="/Home" exact Component={Home} />
            <Route path="/" exact Component={Home} />
            <Route path="/ConversionModal" exact Component={ConversionModal} />
            <Route path="/About" exact Component={About} />
            <Route path="/Help" exact Component={Help} />
            <Route path="/ContactUs" exact Component={ContactUs} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes