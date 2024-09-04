// components/Charts/TopStreamedSongsChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';

const TopStreamedSongsChart = () => {
  const { data } = useDashboard();
  const { topStreamedSongs } = data;

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Top 5 Streamed Songs</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topStreamedSongs}>
          <XAxis dataKey="song" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Bar dataKey="streams" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongsChart;