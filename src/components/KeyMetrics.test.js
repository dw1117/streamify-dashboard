// components/KeyMetrics.test.js
import React from "react";
import { render } from "@testing-library/react";
import KeyMetrics from "./KeyMetrics";
import { DashboardProvider } from "../context/DashboardContext";
import { metrics } from "../data/mockData";

// Mock the context provider to pass the necessary data for testing
const mockData = {
  data: {
    metrics: metrics,
  },
};

test("renders KeyMetrics component correctly", () => {
  const { getByText } = render(
    <DashboardProvider value={mockData}>
      <KeyMetrics />
    </DashboardProvider>
  );

  // Check if key metrics are correctly displayed
  expect(getByText(/Total Users: 250000/)).toBeInTheDocument();
  expect(getByText(/Active Users: 180000/)).toBeInTheDocument();
  expect(getByText(/Total Streams: 5000000/)).toBeInTheDocument();
  expect(getByText(/Revenue: \$1200000/)).toBeInTheDocument();
  expect(getByText(/Top Artist: John Doe/)).toBeInTheDocument();
});
