import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import Layout from "./components/Layout";
import "./App.css";



function App() {
  return (
    <div>

      <div >
        <NavBar color='light' expand='md'/>
        <Layout />
        
      </div>

    </div>
  );
}

export default App;
