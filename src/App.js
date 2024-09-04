// App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";
import "./styles.css";

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;
