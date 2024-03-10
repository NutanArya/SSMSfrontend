import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  LogData,
  ColorPicker,
  ColorMapping,
  Editor,
} from "../../pages";
import { useStateContext } from "../../contexts/ContextProvider";
import Login from "../Login/Login";

const Dashboard = () => {
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

  const [activeTab, setActiveTab] = useState("Ecommerce"); // Default tab

  const renderComponent = (tabName) => {
    switch (tabName) {
      case "Ecommerce":
        return <Ecommerce />;
      case "Orders":
        return <Orders />;
      case "Calendar":
        return <Calendar />;
      case "Employees":
        return <Employees />;
      // Add more cases for other components
      case "Kanban":
        return <Kanban />;
      case "Line":
        return <Line />;
      case "Area":
        return <Area />;
      case "Bar":
        return <Bar />;
      case "Pie":
        return <Pie/>;
      case "Color Mapping":
        return <ColorMapping/>;
      case "Stacked":
        return <Stacked />;
      default:
        return null;
    }
  };

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4 z-50">
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
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar onTabSelect={setActiveTab} />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar onTabSelect={setActiveTab} />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
            : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div>
          {themeSettings && <ThemeSettings />}
          <div>{renderComponent(activeTab)}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
