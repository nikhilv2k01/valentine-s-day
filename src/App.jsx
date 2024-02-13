import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Last from "./Pages/Last";
import Letter from "./Pages/Letter";
import Home from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/letter" element={<Letter />} />
              <Route exact path="/end" element={<Last />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
