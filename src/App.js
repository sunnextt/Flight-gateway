import React from "react";
import Header from './components/navigation/Header'
import SearchHeader from "./components/navigation/SearchHeader";
import Enlight from './components/enlightmore/Enlight'
import BestFlightDeal from "./components/flightDeal/BestFlightDeal";
import HolidayDestinations from "./components/Holidays/HolidayDestinations";
import content from "./data/HolidayData"
import "./App.css";
import { Support } from "./components/supports/Supports";
import { RecentsBlogs } from "./components/recentBlogs/RecentsBlogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SearchHeader />
      <Enlight />
      <BestFlightDeal />
      <Support />
      {/* <HolidayDestinations data={content} /> */}
      <RecentsBlogs />
      <Footer />
    </div>
  );
}

export default App;
