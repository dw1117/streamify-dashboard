// data/mockData.js
export const metrics = {
  totalUsers: 250000,
  activeUsers: 180000,
  totalStreams: 5000000,
  revenue: 1200000,
  topArtist: "John Doe",
};

export const userGrowthData = [
  { month: "January", totalUsers: 150000, activeUsers: 100000 },
  { month: "February", totalUsers: 180000, activeUsers: 120000 },
  { month: "March", totalUsers: 200000, activeUsers: 130000 },
  { month: "April", totalUsers: 220000, activeUsers: 150000 },
  { month: "May", totalUsers: 240000, activeUsers: 160000 },
  { month: "June", totalUsers: 250000, activeUsers: 170000 },
  { month: "July", totalUsers: 255000, activeUsers: 172000 },
  { month: "August", totalUsers: 260000, activeUsers: 175000 },
  { month: "September", totalUsers: 265000, activeUsers: 178000 },
  { month: "October", totalUsers: 270000, activeUsers: 179000 },
  { month: "November", totalUsers: 275000, activeUsers: 180000 },
  { month: "December", totalUsers: 280000, activeUsers: 182000 },
];

export const revenueDistribution = {
  subscriptions: 900000,
  ads: 300000,
};

export const topStreamedSongs = [
  { song: "Song A", artist: "Artist 1", streams: 120000 },
  { song: "Song B", artist: "Artist 2", streams: 110000 },
  { song: "Song C", artist: "Artist 3", streams: 90000 },
  { song: "Song D", artist: "Artist 4", streams: 80000 },
  { song: "Song E", artist: "Artist 5", streams: 70000 },
];

export const recentStreams = [
  {
    song: "Song A",
    artist: "Artist 1",
    dateStreamed: "2024-09-01",
    streamCount: 500,
    userId: 123,
  },
  {
    song: "Song B",
    artist: "Artist 2",
    dateStreamed: "2024-09-02",
    streamCount: 300,
    userId: 456,
  },
  {
    song: "Song C",
    artist: "Artist 3",
    dateStreamed: "2024-09-03",
    streamCount: 200,
    userId: 789,
  },
  {
    song: "Song D",
    artist: "Artist 4",
    dateStreamed: "2024-09-04",
    streamCount: 400,
    userId: 101,
  },
  {
    song: "Song E",
    artist: "Artist 5",
    dateStreamed: "2024-09-05",
    streamCount: 250,
    userId: 102,
  },
];
