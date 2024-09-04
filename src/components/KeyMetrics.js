// components/KeyMetrics.js
import React from "react";
import { useDashboard } from "../context/DashboardContext";

const KeyMetrics = () => {
  const { data } = useDashboard();
  const { totalUsers, activeUsers, totalStreams, revenue, topArtist } =
    data.metrics;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 p-4">
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
        Total Users: {totalUsers}
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
        Active Users: {activeUsers}
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
        Total Streams: {totalStreams}
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
        Revenue: ${revenue}
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
        Top Artist: {topArtist}
      </div>
    </div>
  );
};
export default KeyMetrics;
