# Task Tracker

A simple task management app built with React, TypeScript, and Vite. Users can add, edit, delete, and complete tasks, filter them by status, and their data persists across page reloads via `localStorage`.

## Features

- Add new tasks
- Edit tasks inline (click a task's title to edit it)
- Delete tasks
- Mark tasks as completed
- Completed tasks automatically sort to the bottom of the list
- Filter tasks by **All**, **Completed**, or **Incomplete**
- Data persists in the browser via `localStorage` — tasks remain after refreshing or closing the tab
- Responsive layout for mobile and desktop

## Tech Stack

- **React** (functional components + Hooks: `useState`, `useEffect`)
- **TypeScript**
- **Vite** (build tool/dev server)
- Plain CSS (Flexbox-based layout)

## Project Structure
```
src/
├── components/
│ ├── AddTaskForm.tsx # Form to add a new task
│ ├── FilterBar.tsx # All / Completed / Incomplete filter buttons
│ ├── TaskItem.tsx # Single task row (checkbox, inline edit, delete)
│ └── TaskList.tsx # Renders the list of TaskItem components
├── hooks/
│ └── useLocalStorage.ts # Custom hook syncing state with localStorage
├── types.ts # Task and FilterType TypeScript definitions
├── App.tsx # Main app: state, handlers, layout
├── App.css # Styling
└── main.tsx # App entry point
```

## How to Run Locally

1. Clone the repository:
```bash
   git clone https://github.com/Maryam-zeineddine/Task-Tracker-Application.git
   cd Task-Tracker-Application
```

2. Install dependencies:
```bash
   npm install
```

3. Start the development server:
```bash
   npm run dev
```

4. Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

## Notes

- Tasks are stored under the `tasks` key in the browser's `localStorage`. Clearing your browser's site data will reset the app.
- No backend or database is used — this is a fully client-side application.