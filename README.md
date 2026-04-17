# TaskMate - Task Management Application

A simple and elegant task management application built with React. Create, edit, and manage your tasks with ease.

## Features

✨ **Key Features:**
- ✅ Add new tasks with description, responsible person, and ETA
- ✏️ Edit existing tasks
- ✔️ Mark tasks as done (delete from list)
- 📱 Responsive design with modern UI
- 💾 Local storage persistence (tasks saved in browser)
- 🎨 Beautiful Bootstrap-based styling

## Tech Stack

- **Frontend Framework:** React 18
- **UI Library:** Bootstrap 5 + React-Bootstrap
- **Icons:** Bootstrap Icons
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Browser LocalStorage
- **Build Tool:** Create React App

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with logo
│   ├── TaskTable.jsx       # Task list display component
│   ├── AddTaskModal.jsx    # Modal for adding new tasks
│   └── EditTaskModal.jsx   # Modal for editing tasks
├── App.jsx                 # Main application component
├── App.css                 # Application styles
├── index.js                # React entry point
└── index.css               # Global styles



## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd path/to/Taskmate/code
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000` (or next available port)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App (irreversible)

## How to Use

1. **Add a Task:**
   - Click the "Add Task" button
   - Fill in the task description, responsible person, and ETA
   - Click "Add Task" to save

2. **View Tasks:**
   - All tasks appear in the table below
   - Tasks show: number, description, responsible person, and ETA

3. **Edit a Task:**
   - Click the pencil icon in the Actions column
   - Modify the task details
   - Click "Update Task" to save changes

4. **Mark as Done:**
   - Click the checkmark icon in the Actions column
   - Task will be removed from the list

## Data Persistence

Tasks are automatically saved to the browser's localStorage. This means:
- Your tasks persist even after closing the browser
- Tasks are specific to each browser/device
- Clearing browser data will delete tasks

## Component Details

### AddTaskModal
Displays a modal form for adding new tasks with fields for:
- Task/Description (textarea)
- Responsible Person (text input)
- ETA (datetime-local input)

### EditTaskModal
Similar to AddTaskModal but for editing existing tasks.

### TaskTable
Displays all tasks in a formatted table with:
- Task number
- Task description
- Responsible person name
- ETA in UTC format
- Action icons (mark done, edit)

### Navbar
Displays the application header with the TaskMate logo.

## Styling

The application uses Bootstrap 5 with custom CSS featuring:
- Modern gradient background
- Smooth transitions and hover effects
- Rounded corners and shadows
- Mobile-responsive layout
- Custom color scheme

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid & Flexbox
- LocalStorage API
- Bootstrap 5

## Future Enhancements

- Add task categories/tags
- Priority levels
- Due date reminders
- Export tasks to CSV/JSON
- Dark mode toggle
- User authentication
- Backend API integration

## License

This project is open source.
<<<<<<< HEAD
# Taskmate (MERN)

Taskmate is a MERN app for scheduling tasks with:
- Signup & Login (JWT)
- Task description
- Responsible person
- Scheduled date + time
- Actions done (and ability to mark a task as done)

## Tech Stack
- Frontend: React (Vite) + CSS only


## Project Structure
- `client/` - React UI

## Features (What you can do)
- Create an account and log in
- Create tasks with:
  - `description`
  - `responsiblePerson`
  - `date` + `time` (converted to `scheduledAt`)
  - `isDone` + `actionsDone`
- List, edit, delete tasks
- Mark a task as done and store actions in `actionsDone`

## Local Setup

### 1) Client
1. Go to `client/`
2. Create `client/.env`:
   - `VITE_API_URL=http://localhost:5000`
3. Install dependencies:
   - `npm install`
4. Start dev server:
   - `npm run dev`

## API Summary

Tasks (requires Authorization header `Bearer <token>`):
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Deployment (Free-friendly)
You can deploy in a typical free-friendly way:
- Frontend: Netlify (build from `client/`)



## Running Notes
- Tasks belong to the user, so user sees only their tasks.
- `responsiblePerson` is stored as a plain string (name), which is simpler for learning.

=======
echo "# Taskmate Todo App" > README.md
git add README.md
git commit -m "Add README"
git push
>>>>>>> 35e3ef73f1dca6c247ae54de526733bcfaffad15
