import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function AddTaskModal({ show, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    taskDescription: '',
    taskResponsiblePerson: '',
    taskETA: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.taskDescription.trim()) {
      onAdd(formData);
      setFormData({
        taskDescription: '',
        taskResponsiblePerson: '',
        taskETA: '',
      });
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Task/Description
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            name="taskDescription"
            rows="3"
            placeholder="Add your Task/Description"
            value={formData.taskDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="taskResponsiblePerson" className="form-label">
            Responsible
          </label>
          <input
            type="text"
            className="form-control"
            id="taskResponsiblePerson"
            name="taskResponsiblePerson"
            placeholder="Add the Responsible Person's Name"
            value={formData.taskResponsiblePerson}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskETA" className="form-label">
            ETA
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="taskETA"
            name="taskETA"
            placeholder="Click to Add time"
            value={formData.taskETA}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTaskModal;
