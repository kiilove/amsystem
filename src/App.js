import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AssetDashboard from "./pages/AssetDashboard";
import AssetIncome from "./pages/AssetIncome";
import AssetMain from "./pages/AssetMain";
import Assets from "./pages/Assets";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<AssetMain component={<AssetDashboard />} />}
        ></Route>
        <Route
          path="/assets"
          element={<AssetMain component={<Assets />} />}
        ></Route>
        <Route
          path="/assetinput"
          element={<AssetMain component={<AssetIncome />} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
