import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditTaskModal({ show, onClose, onUpdate, initialData }) {
  const [formData, setFormData] = useState({
    taskDescription: '',
    taskResponsiblePerson: '',
    taskETA: '',
  });

  useEffect(() => {
    if (show && initialData) {
      setFormData(initialData);
    }
  }, [show, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.taskDescription.trim()) {
      onUpdate(formData);
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
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="editTaskDescription" className="form-label">
            Task/Description
          </label>
          <textarea
            className="form-control"
            id="editTaskDescription"
            name="taskDescription"
            rows="3"
            placeholder="Add your Task/Description"
            value={formData.taskDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editTaskResponsiblePerson" className="form-label">
            Responsible
          </label>
          <input
            type="text"
            className="form-control"
            id="editTaskResponsiblePerson"
            name="taskResponsiblePerson"
            placeholder="Add the Responsible Person's Name"
            value={formData.taskResponsiblePerson}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editTaskETA" className="form-label">
            ETA
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="editTaskETA"
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
          Update Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTaskModal;
