import React from "react";
import { Route, Routes } from "react-router-dom";
import Giphy from "../pages/gifs/index";
import GifDetails from "../pages/gifDetail/index";
import AboutPage from "../pages/about";
import PageNotFound from "../pages/pageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Giphy />} />
      <Route path="/gifs/*" element={<Giphy />} />
      <Route path="/gifs/:id" element={<GifDetails />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
