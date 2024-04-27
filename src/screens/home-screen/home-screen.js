import React from "react";
import "./home-screen.css";
import { CustomSidebar } from "../../components";
import { DashboardScreen } from "../dashboard-screen/dashboard-screen";

export const HomeScreen = () => {
  return (
    <div className="dashboardMainDiv">
      <div className="dashboardInfo">
        <CustomSidebar />
        <DashboardScreen />
      </div>
    </div>
  );
};
