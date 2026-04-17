import React, { useState, useEffect } from 'react';

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
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      style={{ display: show ? 'block' : 'none' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Update Task
            </button>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default EditTaskModal;
