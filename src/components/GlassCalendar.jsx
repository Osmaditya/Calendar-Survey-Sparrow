// // src/components/GlassCalendar.jsx
// import React from "react";

// const GlassCalendar = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl shadow-lg p-8">
//           <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
//             <span role="img" aria-label="calendar">📅</span> My Calendar
//           </h1>
//           <h2 className="text-xl font-semibold text-center mb-6 text-gray-600">May 2025</h2>

//           <div className="flex justify-between mb-4">
//             <button className="bg-white/40 hover:bg-white/60 text-gray-800 font-medium px-4 py-1 rounded-md shadow">
//               Prev
//             </button>
//             <button className="bg-white/40 hover:bg-white/60 text-gray-800 font-medium px-4 py-1 rounded-md shadow">
//               Next
//             </button>
//           </div>

//           <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700 mb-2">
//             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
//               <div key={day} className="uppercase">{day}</div>
//             ))}
//           </div>

//           <div className="grid grid-cols-7 gap-2 text-sm">
//             {Array.from({ length: 31 + 4 }).map((_, i) => {
//               const day = i - 3; // May 2025 starts on Thursday
//               return (
//                 <div key={i} className="h-24 bg-white/40 backdrop-blur-sm rounded-xl p-2 flex flex-col items-start justify-start shadow text-gray-800">
//                   {day > 0 && <div className="font-semibold">{day}</div>}

//                   {day === 22 && (
//                     <>
//                       <div className="text-xs mt-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-lg w-full">
//                         10:00 - Team Meeting
//                       </div>
//                       <div className="text-xs mt-1 bg-green-100 text-green-800 px-2 py-1 rounded-lg w-full">
//                         11:00 - Code Review
//                       </div>
//                     </>
//                   )}
//                   {day === 25 && (
//                     <div className="text-xs mt-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg w-full">
//                       14:00 - Client Call
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GlassCalendar;
