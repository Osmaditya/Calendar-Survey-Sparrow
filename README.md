# React Calendar App

A modern calendar web application built with **React**, **Tailwind CSS**, and **dayjs**. This app mimics the core UI/UX features of Google Calendar and supports basic event display.

## 📅 Features

- View current month and year in a grid layout.
- Navigate between months using arrow buttons.
- Highlights today’s date.
- Displays events loaded from a static JSON file.
- Handles overlapping events with visual differentiation.

## 📁 Project Structure

```
calendar-app/
├── public/
│   └── events.json       # Static JSON data for calendar events
├── src/
│   ├── components/
│   │   └── Calendar.jsx  # Main calendar component
│   └── App.jsx           # Root app file
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS config
└── package.json          # Project dependencies
```

## 🗂️ Sample Events JSON

```json
[
  {
    "title": "Team Meeting",
    "date": "2025-05-23",
    "time": "10:00 AM",
    "duration": "1h"
  },
  {
    "title": "Doctor Appointment",
    "date": "2025-05-24",
    "time": "3:00 PM",
    "duration": "30m"
  }
]
```

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **dayjs** (for date handling)
- **lucide-react** (for icons)

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/calendar-app.git
cd calendar-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

## 🌐 Deployment

You can deploy this app using:
- **GitHub Pages**
- **Vercel**
- **Netlify**

Example for Vercel:
```bash
npm run build
vercel
```

## 📤 Tasks

- [x] Complete the assignment
- [x] Push the code to Repo
- [x] Use GitHub Pages or Vercel to deploy
- [x] Share code and live demo

## 🧪 Future Improvements

- Add event creation via UI
- Support recurring events
- Google Calendar API integration
- Authentication



**Made with ❤️ using React + Tailwind CSS**
