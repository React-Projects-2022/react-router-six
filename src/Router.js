import React from "react";
import loadable from "@loadable/component";

import { Route, Routes } from "react-router-dom";
import Navbar from "./core/components/Navbar";
const Public = loadable(() => import("./pages/public/Layout"));
const Home = loadable(() => import("./pages/public/Home"));
const Contact = loadable(() => import("./pages/public/Contact"));
const About = loadable(() => import("./pages/public/About"));
const Admin = loadable(() => import("./pages/private/Layout"));
const NotFound = loadable(() => import("./pages/NotFound"));

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
