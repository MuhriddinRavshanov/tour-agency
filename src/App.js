import Header from "./components/Header/Header";
import React from "react";
import Republics from "./components/Republics/Republics";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/republics" element={<Republics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
