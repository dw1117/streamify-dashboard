// components/Charts/RevenueDistribution.js
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useDashboard } from "../../context/DashboardContext";

const RevenueDistribution = () => {
  const { data } = useDashboard();
  const { revenueDistribution } = data;

  const pieData = [
    { name: "Subscriptions", value: revenueDistribution.subscriptions },
    { name: "Ads", value: revenueDistribution.ads },
  ];
  const COLORS = ["#0088FE", "#FFBB28"];

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueDistribution;
