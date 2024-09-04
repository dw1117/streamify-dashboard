# Streamify Dashboard

## Project Overview

The **Streamify Dashboard** is a single-page application (SPA) built using React that provides analytics for a fictional music streaming service. The dashboard presents key metrics such as total users, active users, total streams, revenue, and the top artist. It also includes several data visualizations, like user growth charts, revenue distribution, and top streamed songs. Additionally, it features a data table displaying recent streams.

### Features
1. **Key Metrics**: Displays vital statistics like total users, active users, total streams, total revenue, and the top artist.
2. **Charts**:
    - **User Growth**: Line chart showing the user growth for both total and active users over the past 12 months.
    - **Revenue Distribution**: Pie chart showing the revenue breakdown from subscriptions and ads.
    - **Top Streamed Songs**: Bar chart displaying the top 5 streamed songs in the last 30 days.
3. **Data Table**: A detailed, sortable, and filterable table showing recent streams, including song name, artist, date streamed, stream count, and user ID.
4. **Responsive Design**: The application is fully responsive, making it usable on different screen sizes.
5. **Mock Data**: Data is mocked using hardcoded JSON data for metrics, charts, and the table. No backend connection is required.
6. **Testing**: Includes unit testing for key components like KeyMetrics using Jest and React Testing Library.React Testing

### Thought Process
When designing this dashboard, the focus was on:

- **User Experience (UX)**: Providing a clean, easy-to-use interface for management to view and analyze key metrics.
- **Data Visualization**: Ensuring data is displayed in a meaningful and digestible way using various charts.
- **Responsiveness**: Making the layout adapt to different devices (mobile, tablet, desktop) using Tailwind CSS.
- **Performance**: Minimizing re-renders and optimizing performance using React's built-in features like lazy loading and memoization where necessary.

### Installation and Running the Application
#### Prerequisites
Ensure that you have Node.js installed (v12 or higher) and **npm** or **yarn** as your package manager.

#### Step 1: Clone the Repository
```
git clone https://github.com/dw1117/streamify-dashboard.git
cd streamify-dashboard
```

#### Step 2: Install Dependencies
Run the following command to install the required dependencies:
```
npm install
```

#### Step 3: Run the Application
To run the application locally, use:
```
npm start
```
This will start the development server and open the application in your default browser at http://localhost:3000.

#### Step 4: Running Tests
To run the tests for the components, use:

```
npm test
```

This will run the Jest test suite, and you can also run it in watch mode:
```
npm test -- --watch
```

#### Project Structure
```
src/
│
├── components/
│   ├── Dashboard.js         # Main dashboard layout
│   ├── KeyMetrics.js        # Displays key metrics
│   ├── Charts/
│   │   ├── UserGrowthChart.js    # Line chart for user growth
│   │   ├── RevenueDistribution.js # Pie chart for revenue distribution
│   │   ├── TopStreamedSongsChart.js # Bar chart for top streamed songs
│   ├── DataTable.js         # Table showing recent streams
│
├── context/
│   ├── DashboardContext.js   # Context for global state management
│
├── data/
│   └── mockData.js           # Mock data for the app
│
├── App.js                   # Root component
├── index.js                 # Entry point
└── styles.css               # Global styles (including Tailwind setup)
```

### Trade-offs
#### 1. State Management with Context API
Instead of using a more sophisticated state management library like **Redux**, we opted for **React's Context API** to manage the state because the application's state requirements are relatively simple, and Context API offers a lightweight solution.

#### 2. Mock Data
To simplify the project, we are using **mocked data** stored in the data/mockData.js file. This means no backend is required, which simplifies development and reduces setup time, but it's less realistic for a production-level application where an API or a database would provide the data.

#### 3. Testing
Only basic unit testing has been implemented. For a production application, more comprehensive tests, including integration and end-to-end tests, would be necessary.

### Known Issues and Improvements
- **Chart Interaction**: While the charts are fully functional, further interactions such as clicking on pie chart segments to filter data in the table could be added for a better UX.
- **Data Fetching**: In a real-world scenario, the data would come from an API. Integrating a mock API like **JSON Server** or **MirageJS** could enhance realism.
- **Error Handling**: The application currently lacks advanced error handling. Adding proper error boundaries in React and improving form validation would be beneficial.

### Conclusion
The Streamify Dashboard is a robust, lightweight, and responsive analytics dashboard that displays critical metrics for a fictional music streaming service. While we opted for some trade-offs like mock data and lightweight state management, the design is easily extendable for a more complex application in a production setting.

