import React from "react";
import "./App.css";
import { PetCarePlannerMainContainer } from "./PetCarePlannerMainContainer";

/**
 * Main App layout for PetCarePlanner with dark theme, brand color palette,
 * responsive design, top bar with notification area, and floating action button.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        background: "var(--kavia-dark, #181c20)",
        color: "var(--text-color, #fff)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* --- TOP BAR --- */}
      <nav
        className="navbar"
        style={{
          background: "#101418",
          borderBottom: "1px solid var(--border-color)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          padding: 0,
          zIndex: 105,
          height: 68,
          display: "flex",
          alignItems: "center"
        }}
        aria-label="Main navigation"
      >
        <div
          className="container"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 58,
            padding: "0 14px"
          }}
        >
          {/* App Title & Logo */}
          <div
            className="logo"
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#4CAF50"
            }}
          >
            <span
              className="logo-symbol"
              style={{
                color: "#4CAF50",
                fontWeight: 900,
                fontSize: "1.75em",
                marginRight: 8
              }}
              aria-label="PetCarePlanner"
            >
              🐾
            </span>
            <span style={{ color: "var(--text-color, #fff)", fontWeight: 700, fontSize: "1.1em" }}>
              PetCarePlanner
            </span>
          </div>
          {/* Notification Bar Placeholder */}
          <div
            style={{
              minWidth: 210,
              maxWidth: 330,
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: "flex-end"
            }}
          >
            {/* Notification summary/placeholder */}
            <div
              style={{
                color: "#FFC107",
                background: "rgba(33,150,243,0.10)",
                borderRadius: 6,
                fontSize: "1em",
                padding: "6px 14px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "1px solid var(--border-color)",
                minWidth: 0
              }}
              aria-live="polite"
              tabIndex={0}
              aria-label="Notifications and reminders"
            >
              {/* Will be replaced with dynamic reminders in future */}
              <span style={{ opacity: 0.83 }}>No new reminders</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main
        style={{
          marginTop: 76,
          flex: 1,
          width: "100vw",
          minHeight: "calc(100vh - 76px)",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            maxWidth: 960,
            padding: "0 18px 36px 18px",
            minHeight: "60vh",
            position: "relative",
            background: "transparent"
          }}
        >
          {/* --- MAIN PLANNER COMPONENT (handles routing, dashboard, etc.) --- */}
          <PetCarePlannerMainContainer />

          {/* --- DASHBOARD placeholder, to be integrated inside main container in future --- */}
          {/* <DashboardMainSection /> (placeholder for later) */}
        </div>
      </main>

      {/* --- FLOATING ACTION BUTTON (FAB) --- */}
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
          boxShadow: "0 3px 15px 0 rgba(0,0,0,0.23)",
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5em",
          fontWeight: 700,
          cursor: "pointer",
          outline: "none",
          transition: "background 0.2s, box-shadow 0.2s"
        }}
        tabIndex={0}
      >
        <span style={{ marginTop: -2, color: "white", fontSize: "1em" }}>+</span>
      </button>
    </div>
  );
}

export default App;