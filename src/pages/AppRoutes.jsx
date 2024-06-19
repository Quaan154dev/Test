import React from "react";
import { Route, Routes, useLocation } from "react-router";
import NotFound from "./NotFound";
import Home from "./Home";
import LearnHome from "./LearnHome";
import Scene from "./SadStory";
import SadStory from "./SadStory/trailer";
import Alphabetic from "../components/Alphabetic";
import WordGame from "./WordGame";
import PlayHard from "./PlayHard";
import { AnimatePresence } from "framer-motion";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home></Home>} />
      <Route path="/alphabet" element={<Alphabetic></Alphabetic>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/learn" element={<LearnHome></LearnHome>} />
      <Route path="/trailer" element={<Scene></Scene>} />
      <Route path="/wordgame" element={<WordGame></WordGame>} />
      <Route path="/play" element={<PlayHard></PlayHard>} />
      <Route path="/trailer/sadstory" element={<SadStory></SadStory>} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
