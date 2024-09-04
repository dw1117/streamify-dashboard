// components/Charts/UserGrowthChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useDashboard } from "../../context/DashboardContext";

const UserGrowthChart = () => {
  const { data } = useDashboard();
  const { userGrowthData } = data;

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-4">
        User Growth (Last 12 Months)
      </h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={userGrowthData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
            <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default UserGrowthChart;
