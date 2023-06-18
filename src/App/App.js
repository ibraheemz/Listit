import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import  Header from './../Components/Header';
import Home from "../Components/Home";
import ConvertionModule from "../Components/ConvertionModule";
import About from "../Components/About";
const App = () => {
  const location = useLocation()
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Home" exact Component={Home} />
          <Route path="/" exact Component={Home} />
          <Route path="/ConvertionModule" exact Component={ConvertionModule} />
          <Route path="/About" exact Component={About}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
