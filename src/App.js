import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import routes from "./routes"; // Corrected import path
import "./App.css";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { FiSettings } from "react-icons/fi";

import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Sidebar from "./components/Sidebar";
import ThemeSettings from "./components/ThemeSettings";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import routes from "./routes";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const renderRoutes = (routes) => {
    return routes.map((route) => {
      if (route.routes) {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={renderRoutes(route.routes)}
          />
        );
      } else if (route.component) {
        const Component = route.component; // Check if route component exists
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<Component />} // Render the component if it exists
          />
        );
      } else {
        console.error(`Component not found for route: ${route.path}`); // Log an error if component is missing
        return null; // Render nothing
      }
    });
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className=" relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        <div>
          <div>{themeSettings && <ThemeSettings />}</div>
          <Routes>{renderRoutes(routes)}</Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
