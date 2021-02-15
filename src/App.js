import React from "react";
import Header from './components/navigation/Header'
import SearchHeader from "./components/navigation/SearchHeader";
import Enlight from './components/enlightmore/Enlight'
import BestFlightDeal from "./components/flightDeal/BestFlightDeal";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <SearchHeader />
      <Enlight />
      <BestFlightDeal />
    </div>
  );
}

export default App;
