import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './components/Navbar';
import TaskTable from './components/TaskTable';
import AddTaskModal from './components/AddTaskModal';
import EditTaskModal from './components/EditTaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    taskDescription: '',
    taskResponsiblePerson: '',
    taskETA: '',
  });

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storageObject = localStorage.getItem('taskStorage');
    if (storageObject) {
      try {
        setTasks(JSON.parse(storageObject));
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        setTasks([]);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('taskStorage', JSON.stringify(tasks));
    } else {
      localStorage.removeItem('taskStorage');
    }
  }, [tasks]);

  const handleAddTask = (formData) => {
    const newTask = {
      taskDescription: formData.taskDescription,
      taskResponsiblePerson: formData.taskResponsiblePerson,
      taskETA: formData.taskETA,
    };
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditFormData(tasks[index]);
    setShowEditModal(true);
  };

  const handleUpdateTask = (formData) => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = {
      taskDescription: formData.taskDescription,
      taskResponsiblePerson: formData.taskResponsiblePerson,
      taskETA: formData.taskETA,
    };
    setTasks(updatedTasks);
    setShowEditModal(false);
    setEditingIndex(null);
  };

  const handleMarkAsDone = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setShowAddModal(true)}
          >
            Add Task
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <TaskTable
              tasks={tasks}
              onEdit={handleEditTask}
              onMarkAsDone={handleMarkAsDone}
            />
          </div>
        </div>
      </div>

      <AddTaskModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddTask}
      />

      <EditTaskModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onUpdate={handleUpdateTask}
        initialData={editFormData}
      />
    </div>
  );
}

export default App;
