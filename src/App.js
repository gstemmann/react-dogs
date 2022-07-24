import React from "react";
import { Routes, Route } from "react-router-dom";
import DogProfile from "./DogProfile";
import Dogs from "./Dogs";



function App() {
  return (
    <Routes>
    <Route path="/dogs" element={<Dogs />} />
    <Route path="/dogs/:name" element={<DogProfile />} />
</Routes>
  );
}




export default App;
