import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import Layout from "./components/Layout";
import "./App.css";
import CharacterPage from "./pages/CharacterPage";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar color='light' expand='md'/>}>
            <Route index element={<Layout />} />
            <Route path="character/:id" element={<CharacterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>              

    </div>
  );
}

export default App;
