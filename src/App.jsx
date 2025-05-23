import React from "react";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📅 My Calendar</h1>
      <Calendar />
    </div>
  );
};

export default App;

// src/App.jsx
// import React from "react";
// import GlassCalendar from "./components/GlassCalendar";

// function App() {
//   return (
//     <>
//       <GlassCalendar />
//     </>
//   );
// }

// export default App;
