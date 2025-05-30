import React from "react";
import "./App.css";
import { PetCarePlannerMainContainer } from "./PetCarePlannerMainContainer";

/**
 * Main App wrapper for PetCarePlanner with dark theme, responsive layout,
 * primary navigation bar, notification area, and floating action button.
 */
function App() {
  return (
    <div className="app" style={{ background: "#181c20", minHeight: "100vh" }}>
      {/* Top navigation bar with logo/title and notifications */}
      <nav
        className="navbar"
        style={{
          background: "#101418",
          borderBottom: "1px solid var(--border-color)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 105,
        }}
        aria-label="Main navigation"
      >
        <div
          className="container"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <div className="logo" style={{ fontWeight: 700, fontSize: "1.35rem", display: "flex", alignItems: "center" }}>
            <span className="logo-symbol" style={{ color: "#4CAF50", fontWeight: 900, fontSize: "1.7em", marginRight: 8 }} aria-label="PetCarePlanner">🐾</span>
            PetCarePlanner
          </div>
          {/* Notification bar area (placeholder for reminders & alerts) */}
          <div
            style={{
              minWidth: 280,
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: "flex-end",
            }}
          >
            {/* Placeholder for dynamic notifications/reminders */}
            <div
              style={{
                color: "#FFC107",
                background: "rgba(33,150,243,0.10)",
                borderRadius: 6,
                fontSize: "0.97em",
                padding: "6px 14px",
                maxWidth: 230,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "1px solid var(--border-color)",
              }}
              aria-live="polite"
              tabIndex={0}
              aria-label="Notifications and reminders"
            >
              {/* Will be replaced by notification summary */}
              <span style={{ opacity: 0.82 }}>No new reminders</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content view; account for navbar height with marginTop */}
      <main
        style={{
          marginTop: 80,
          width: "100%",
          flex: 1,
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            maxWidth: 950,
            padding: "0 18px 36px 18px",
            minHeight: "50vh",
            position: "relative",
            background: "transparent",
          }}
        >
          {/* Place the app's main container/component here */}
          <PetCarePlannerMainContainer />
          {/* Dashboard, tasks, and navigation features will be routed/integrated inside PetCarePlannerMainContainer */}
        </div>
      </main>

      {/* Floating Action Button (FAB) for quick access to adding pet/task */}
      <button
        className="fab-btn"
        aria-label="Quick Add"
        style={{
          position: "fixed",
          bottom: 28,
          right: 32,
          zIndex: 120,
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 3px 15px 0 rgba(0,0,0,0.21)",
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.35em",
          fontWeight: 700,
          cursor: "pointer",
          outline: "none",
          transition: "background 0.2s",
        }}
        tabIndex={0}
      >
        +
      </button>
    </div>
  );
}

export default App;