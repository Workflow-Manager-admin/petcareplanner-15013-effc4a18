import React from "react";

/**
 * FAB (Floating Action Button) component
 * 
 * Prominently floats on UI for quick creation of pet or task.
 * Should display '+' and open dialog in future.
 */
// PUBLIC_INTERFACE
const FAB = ({ onClick }) => {
  return (
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
      onClick={onClick}
      tabIndex={0}
    >
      <span style={{ marginTop: -2, color: "white", fontSize: "1em" }}>+</span>
    </button>
  );
};

export default FAB;
