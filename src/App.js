import { useState, useEffect } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import Location from "./Location/Location";
import Character from "./Character/Character";
import Episode from "./Episode/Episode";
import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error/Error";
import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        <nav>
          <Nav />
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/character" element={<Character />} />
            <Route path="/location" element={<Location />} />
            <Route path="/episode" element={<Episode />} />
          </Routes>
          <About />
        </main>
      </div>
    </>
  );
}
