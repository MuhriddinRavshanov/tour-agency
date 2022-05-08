import Header from "./components/Header/Header";
import React from "react";
import Republics from "./components/Republics/Republics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepGuide from "./components/RepGuide/RepGuide";

const App = () => {
  return (
    <div>
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/republics" element={<Republics />} />
        </Routes>
      </BrowserRouter> */}
      <Republics/>
      <RepGuide/>
    </div>
  );
};

export default App;
