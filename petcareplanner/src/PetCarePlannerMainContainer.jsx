import React, { useReducer } from "react";

/*
  Application-wide state and actions for PetCarePlanner.
  All state is held in-memory using useReducer (no backend or persistent storage).
  State covers:
   - pets: profiles for multiple pets
   - tasks: recurring care tasks
   - healthLogs: events per pet
   - notifications: reminders/UI highlights
*/

// --------- Data Models ---------

/**
 * Pet Profile
 * @typedef {Object} Pet
 * @property {string} id - Unique identifier
 * @property {string} name
 * @property {string} species
 * @property {string} breed
 * @property {string} ageOrDob - Could be age (number string) or ISO dob date
 * @property {string|null} photo - Local photo (dataUrl/base64 string or null)
 */

/**
 * Care Task
 * @typedef {Object} Task
 * @property {string} id
 * @property {string[]} petIds - IDs of pets this task is for
 * @property {string} type - e.g. 'Feeding', 'Walking', 'Medication', etc.
 * @property {string} label - Optional task label
 * @property {Object} recurrence - { type: 'daily' | 'weekly' | 'custom', daysOfWeek?: [0-6], interval?: number }
 * @property {string[]} timesOfDay - Array of 'HH:mm' time strings
 * @property {boolean} completedToday - Whether marked completed today (reset on reload)
 */

/**
 * Health Log Entry
 * @typedef {Object} HealthLog
 * @property {string} id
 * @property {string} petId
 * @property {string} eventType - 'vet-visit', 'vaccination', 'medication', 'note'
 * @property {string} date - ISO date string or datetime
 * @property {string} description
 * @property {Object} details - (Flexible fields depending on type)
 */

/**
 * Notification / Reminder
 * @typedef {Object} Notification
 * @property {string} id
 * @property {string} message - Short message/text
 * @property {string} type - 'info' | 'alert' | 'reminder'
 * @property {number} dueAt - timestamp (ms)
 * @property {boolean} dismissed
 */

const initialState = {
  pets: /** @type {Pet[]} */ ([]),
  tasks: /** @type {Task[]} */ ([]),
  healthLogs: /** @type {HealthLog[]} */ ([]),
  notifications: /** @type {Notification[]} */ ([]),
  // Navigation state (dashboard, profiles, etc.)
  currentView: "dashboard", // 'dashboard' | 'profiles' | 'healthlog' etc.
  selectedPetId: null, // For viewing/editing pet profiles/logs
};

// --------- Reducer and Actions ---------

/**
 * Action types for the reducer.
 */
const ACTIONS = {
  // Pet profiles
  ADD_PET: "ADD_PET",
  UPDATE_PET: "UPDATE_PET",
  DELETE_PET: "DELETE_PET",
  // Tasks
  ADD_TASK: "ADD_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  MARK_TASK_COMPLETED: "MARK_TASK_COMPLETED",
  // Health Log
  ADD_HEALTH_LOG: "ADD_HEALTH_LOG",
  UPDATE_HEALTH_LOG: "UPDATE_HEALTH_LOG",
  DELETE_HEALTH_LOG: "DELETE_HEALTH_LOG",
  // Notifications
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  DISMISS_NOTIFICATION: "DISMISS_NOTIFICATION",
  // Navigation/UI
  SET_VIEW: "SET_VIEW",
  SELECT_PET: "SELECT_PET",
};

/**
 * Main reducer for handling all app state.
 * PUBLIC_INTERFACE
 */
function petCarePlannerReducer(state, action) {
  switch (action.type) {
    // -- Pets --
    case ACTIONS.ADD_PET:
      return { ...state, pets: [...state.pets, action.payload] };
    case ACTIONS.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map((p) =>
          p.id === action.payload.id ? { ...p, ...action.payload.data } : p
        ),
      };
    case ACTIONS.DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter((p) => p.id !== action.payload.id),
        // Clean up tasks and logs associated with deleted pet
        tasks: state.tasks.filter((t) => !t.petIds.includes(action.payload.id)),
        healthLogs: state.healthLogs.filter(
          (log) => log.petId !== action.payload.id
        ),
      };
    // -- Tasks --
    case ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload.data } : t
        ),
      };
    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
      };
    case ACTIONS.MARK_TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, completedToday: true }
            : t
        ),
      };
    // -- Health Log --
    case ACTIONS.ADD_HEALTH_LOG:
      return { ...state, healthLogs: [...state.healthLogs, action.payload] };
    case ACTIONS.UPDATE_HEALTH_LOG:
      return {
        ...state,
        healthLogs: state.healthLogs.map((log) =>
          log.id === action.payload.id
            ? { ...log, ...action.payload.data }
            : log
        ),
      };
    case ACTIONS.DELETE_HEALTH_LOG:
      return {
        ...state,
        healthLogs: state.healthLogs.filter((log) => log.id !== action.payload.id),
      };
    // -- Notifications --
    case ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case ACTIONS.DISMISS_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.payload.id ? { ...n, dismissed: true } : n
        ),
      };
    // -- Navigation/UI --
    case ACTIONS.SET_VIEW:
      return { ...state, currentView: action.payload.view };
    case ACTIONS.SELECT_PET:
      return { ...state, selectedPetId: action.payload.petId };
    default:
      return state;
  }
}

// --------- Main Container Component ---------

// PUBLIC_INTERFACE
function PetCarePlannerMainContainer({ children }) {
  /**
   * The main state and dispatch for the whole PetCarePlanner app.
   */
  const [state, dispatch] = useReducer(petCarePlannerReducer, initialState);

  // This context object can be memoized and provided to descendant components via context in the future
  // For now, just pass down via props if needed
  return (
    <div className="petcareplanner-main">
      {/* Placeholder - integration of actual components/navigation will be done in future */}
      <pre style={{
        background: "#222", color: "#fff",
        margin: "32px", padding: "16px", borderRadius: "8px"
      }}>
        App State Demo (initial scaffolding): {"
"}
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export { PetCarePlannerMainContainer, petCarePlannerReducer, ACTIONS };
