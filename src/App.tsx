import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PortFolioPage from "./pages/porfolio.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortFolioPage />} />
    </Routes>
  );
}

export default App;
