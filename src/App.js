import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import FirestoreService from "./Services/FirestoreService";
import ActiveElectionsPage from "./pages/ActiveElectionsPage";
import CreateElectionPage from "./pages/CreateElectionPage";
import MyElectionsPage from "./pages/MyElectionsPage";
import ElectionDetailsPage from "./pages/ElectionDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  const [state, setState] = useState({
    userAddress: "",
    elections: [],
  });

  const connectWallet = async (e) => {
    e.preventDefault();

    try {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});

      setState({
        ...state,
        userAddress: accounts[0]
      });

    } catch(err) {
      console.log(err.name);

    }
  };

  useEffect(() => {
    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const accounts = await provider.listAccounts();
        const elections = await FirestoreService.getElections();

        return {
          addr: accounts[0], 
          elections: elections
        };

      } catch(err) {
        console.log(err.name);

      }
    })().then(value => setState({
      ...state,
      userAddress: value.addr ?? "",
      elections: value.elections ?? []
    }));
    
  }, []);

  return (
    <div className="w-full min-h-full my-0 mx-auto">
      <Context.Provider value={{state, setState, connectWallet}}>
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
