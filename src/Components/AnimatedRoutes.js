import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Components/Home";
import ConvertionModule from "../Components/ConvertionModule";
import About from "../Components/About";
import Help from './Help';
import ContactUs from './ContactUs';
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/Home" exact Component={Home} />
            <Route path="/" exact Component={Home} />
            <Route path="/ConvertionModule" exact Component={ConvertionModule} />
            <Route path="/About" exact Component={About}/>
            <Route path="/Help" exact Component={Help} />
            <Route path="/ContactUs" exact Component={ContactUs} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes