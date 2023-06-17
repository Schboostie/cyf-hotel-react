import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    let footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
    <div className="App">
      <Heading />
      <Bookings />
      <div className="info-cards">
        <TouristInfoCards city="Glasgow" />
        <TouristInfoCards city="Manchester" />
        <TouristInfoCards city="London" />
      
      </div>
      <Footer array={footerArray} />
    </div>
  );
};

export default App;
