import React from "react";
import "./App.css";
import { PetCarePlannerMainContainer } from "./PetCarePlannerMainContainer";

function App() {
  return (
    <div className="app">
      {/* Top navbar and (future) Notification bar */}
      <nav className="navbar">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div className="logo">
              <span className="logo-symbol">*</span> PetCarePlanner
            </div>
            {/* Placeholder for Floating Action Button or navigation */}
            <button className="btn" aria-label="Add">+</button>
          </div>
        </div>
      </nav>
      {/* Main Container for PetCarePlanner App state and UI */}
      <main>
        <div className="container" style={{ marginTop: 96 }}>
          <PetCarePlannerMainContainer />
        </div>
      </main>
    </div>
  );
}

export default App;