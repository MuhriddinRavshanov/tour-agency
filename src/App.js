import Header from "./components/Header/Header";
import React from "react";
import Republics from "./components/Republics/Republics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepGuide from "./components/RepGuide/RepGuide";
import Footer from "./components/Footer/Footer";

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
      <Footer/>
    </div>
  );
};

export default App;
