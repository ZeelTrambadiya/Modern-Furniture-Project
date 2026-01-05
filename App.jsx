import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Contact from "./Component/Pages/Contact";
import About from "./Component/Pages/About";
import Services from "./Component/Pages/Services";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Layout/Footer";
import UserLayout from "./Component/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
