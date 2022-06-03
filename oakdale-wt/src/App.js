import React from "react";
import Landing from "./components/global/landing-page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Landing />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
};

export default App;
