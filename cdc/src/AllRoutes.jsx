import React from "react";
import {Routes, Route} from "react-router-dom";
//import Landing from "./Pages/Landing/Landing";
import Teams from "./Pages/Teams/Teams";
import Ourinspiration from "./Pages/OurInspiration/OurInspiration";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/'></Route>
        <Route path='/teams' element={<Teams />} />
        <Route path='/oinsp' element={<Ourinspiration />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
