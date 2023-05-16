import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="form-container">
            <Form />
          </div>
        }
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
