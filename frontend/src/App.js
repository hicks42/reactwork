import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Nav";
import Morpion from "./components/Morpion/Morpion";
import BasicApps from "./components/Basic-exo/BasicsApps";
import CarApp from "./components/Basic-exo/Car/CarApp";
import DPApp from "./DifficultyPicker/DiffPickApp";
import TvshowApp from "./Tvshow/TvshowApp";
import { PromesseApp } from "./components/Basic-exo/Promesse/PromesseApp";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/morpion" element={<Morpion />} />
          <Route path="/basicapps" element={<BasicApps />} />
          <Route path="/carApp" element={<CarApp />} />
          <Route path="/dpApp" element={<DPApp />} />
          <Route path="/tvshow" element={<TvshowApp />} />
          <Route path="/promesse" element={<PromesseApp />} />
        </Routes>
      </div>
    </>
  );
}
