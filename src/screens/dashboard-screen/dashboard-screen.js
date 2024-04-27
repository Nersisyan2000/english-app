import React from "react";
import { DashboardCard } from "./components/dashboard-card";
import { useTranslation } from "react-i18next";
import { StatisticsScreen } from "../../components";

export const DashboardScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboardScreen">
      <div>
        <p className="dashboardTitle">{t("DASHBOARD")}</p>
      </div>
      <div className="dashboardScreenItem">
        <DashboardCard />
        <StatisticsScreen />
      </div>
    </div>
  );
};
