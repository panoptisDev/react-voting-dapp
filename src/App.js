import React from "react";
import { Routes, Route } from "react-router-dom";
import ActiveElectionsPage from "./pages/ActiveElectionsPage";
import ElectionDetailsPage from "./pages/ElectionDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <div className="w-full min-h-full my-0 mx-auto">
      <Routes>
        <Route path="/" element={<ActiveElectionsPage />}/>
        <Route path="/election-details" element={<ElectionDetailsPage />}/>
        <Route path="/about-us" element={<AboutUsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
