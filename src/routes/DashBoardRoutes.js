import React from "react";
import { Route, Routes } from "react-router-dom";
import { ElectricScreen } from "../components/electric/ElectricScreen";
import { FireScreen } from "../components/fire/FireScreen";
import { GroundScreen } from "../components/ground/GroundScreen";
import { Home } from "../components/Home";
import { PlantScreen } from "../components/plant/PlantScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import NavBar from "../components/ui/NavBar";
import { WaterScreen } from "../components/water/WaterScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="electri" element={<ElectricScreen />} />
          <Route path="fire" element={<FireScreen />} />
          <Route path="ground" element={<GroundScreen />} />
          <Route path="plant" element={<PlantScreen />} />
          <Route path="seach" element={<SearchScreen />} />
          <Route path="water" element={<WaterScreen />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
