import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchHotel from "./components/SearchHotel/SearchHotel";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Header from "./layout/Header";

function App() {
  return (
    <Routes>
      <Route element={<Header />} path="/">
        <Route path="/" element={<SearchHotel />} />
        <Route path="/place/:place" element={<HotelsPage />} />
        <Route path="/hotel/:hotelName" element={<HotelDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
