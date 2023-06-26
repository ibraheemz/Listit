import React from "react";
import { BrowserRouter as Router, HashRouter} from "react-router-dom";
import  Header from './../Components/Header';
import AnimatedRoutes from "../Components/AnimatedRoutes";
const App = () => {
  return (
    <HashRouter>
        <Header />
        <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
