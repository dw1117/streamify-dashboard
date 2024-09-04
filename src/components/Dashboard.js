// components/Dashboard.js
import React from "react";
import KeyMetrics from "./KeyMetrics";
import UserGrowthChart from "./Charts/UserGrowthChart";
import RevenueDistribution from "./Charts/RevenueDistribution";
import TopStreamedSongsChart from "./Charts/TopStreamedSongsChart";
import DataTable from "./DataTable";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Key metrics at the top */}
      <KeyMetrics />

      {/* Stack UserGrowthChart and RevenueDistribution vertically */}
      <div className="flex flex-col md:flex-col gap-8">
        <UserGrowthChart />
        <RevenueDistribution />
      </div>

      {/* Top Streamed Songs and DataTable */}
      <TopStreamedSongsChart />
      <DataTable />
    </div>
  );
};

export default Dashboard;
