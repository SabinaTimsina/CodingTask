
import React from "react";
import BioHazardTable from "../views/BioHazardTable";
import { Routes, Route } from 'react-router-dom';

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BioHazardTable/>} />
    </Routes>
  );
};

export default ProjectRoutes;
