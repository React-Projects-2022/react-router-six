import React from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./pages/public/Layout";
import Admin from "./pages/private/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Navbar from "./core/components/Navbar";
const Router = () => (
  <>
   <Navbar />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Public />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </>
);

export default Router;
