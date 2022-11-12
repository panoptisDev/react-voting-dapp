import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import ActiveElectionsPage from "./pages/ActiveElectionsPage";
import CreateElectionPage from "./pages/CreateElectionPage";
import MyElectionsPage from "./pages/MyElectionsPage";
import ElectionDetailsPage from "./pages/ElectionDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  const [state, setState] = useState({
    elections: [
      {id: 1, title: "Кто съел деда?", address: "0x2A1135e669A5f16b46daAfB718F6aA4F3818b81a", date: "10.12.2021"},
      {id: 2, title: "Кто съел бабку?", address: "0x178ddC5bFb15c6257EAb1F3a6a680bEBa7538D8D", date: "09.11.2022"},
      {id: 3, title: "Кто съел деда?", address: "0x2A1135e669A5f16b46daAfB718F6aA4F3818b81a", date: "10.12.2021"},
      {id: 4, title: "Кто съел бабку?", address: "0x178ddC5bFb15c6257EAb1F3a6a680bEBa7538D8D", date: "09.11.2022"},
    ],
  })

  return (
    <div className="w-full min-h-full my-0 mx-auto">
      <Context.Provider value={{state, setState}}>
        <Routes>
          <Route path="/" element={<ActiveElectionsPage />} />
          <Route path="/create-election" element={<CreateElectionPage />} />
          <Route path="/my-elections" element={<MyElectionsPage />} />
          <Route path="/:address" element={<ElectionDetailsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
