import React from "react";
import {Routes, Route} from "react-router-dom";
//import Landing from "./Pages/Landing/Landing";
import Teams from "./Pages/Teams/Teams";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Teams />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
