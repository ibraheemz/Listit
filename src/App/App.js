import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import  Header from './../Components/Header';
import AnimatedRoutes from "../Components/AnimatedRoutes";
const App = () => {
  return (
    <Router>
        <Header />
        <AnimatedRoutes />
    </Router>
  );
}

export default App;
