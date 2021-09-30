import React from "react";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import "./App.css";

function App() { 
    return (
    <>
      <NavBar />
      <main>
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default App;
