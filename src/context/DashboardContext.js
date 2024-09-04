// context/DashboardContext.js
import React, { createContext, useContext, useState } from 'react';
import { metrics, userGrowthData, revenueDistribution, topStreamedSongs, recentStreams } from '../data/mockData';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState({
    metrics,
    userGrowthData,
    revenueDistribution,
    topStreamedSongs,
    recentStreams,
  });

  return (
    <DashboardContext.Provider value={{ data }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);