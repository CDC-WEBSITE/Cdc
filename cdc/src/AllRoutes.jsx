import React from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
