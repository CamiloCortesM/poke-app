import React from "react";
import { Route, Routes } from "react-router-dom";
import { ElectricScreen } from "../components/electric/ElectricScreen";
import { ErrorScreen } from "../components/error/ErrorScreen";
import { FireScreen } from "../components/fire/FireScreen";
import { GroundScreen } from "../components/ground/GroundScreen";
import { Home } from "../components/Home";
import { NormalScreen } from "../components/normal/NormalScreen";
import { PokemonScreen } from "../components/pokemon/PokemonScreen";
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
          <Route path="electric" element={<ElectricScreen />} />
          <Route path="fire" element={<FireScreen />} />
          <Route path="ground" element={<GroundScreen />} />
          <Route path="normal" element={<NormalScreen />} />
          <Route path="water" element={<WaterScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="pokemon/:pokeId" element={<PokemonScreen />}/>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorScreen />} />
        </Routes>
      </div>
    </>
  );
};
