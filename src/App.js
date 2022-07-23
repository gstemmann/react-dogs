import React from "react";
import { Routes, Route } from "react-router-dom";

import DogDetails from "./DogDeatails";


function App() {
  return (
    <Routes>
        <Route path="/dogs" element={<DogDetails />} />
    </Routes>
    
  );
}




export default App;
