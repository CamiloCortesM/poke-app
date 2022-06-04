import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { DashBoardRoutes } from "./DashBoardRoutes";

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
      <Route path="/*" element={<DashBoardRoutes/>} />
  </Routes>
  </BrowserRouter>
  );
};

export default AppRoutes;
