import React from "react";
import Header from './components/navigation/Header'
import SearchHeader from "./components/navigation/SearchHeader";
import Enlight from './components/enlightmore/Enlight'
import BestFlightDeal from "./components/flightDeal/BestFlightDeal";
import HolidayDestinations from "./components/Holidays/HolidayDestinations";
import content from "./data/HolidayData"
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <SearchHeader />
      <Enlight />
      <BestFlightDeal />
      <HolidayDestinations data={content} />
    </div>
  );
}

export default App;
