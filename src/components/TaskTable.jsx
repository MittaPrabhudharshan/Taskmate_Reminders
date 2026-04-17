import React from 'react';

function TaskTable({ tasks, onEdit, onMarkAsDone }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toUTCString();
  };

  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-bordered table-hover align-middle">
          <thead className="text-center table-light">
            <tr>
              <th>#</th>
              <th>Task/Description</th>
              <th>Responsible</th>
              <th>ETA</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tasks && tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.taskDescription}</td>
                  <td>{task.taskResponsiblePerson}</td>
                  <td>{formatDate(task.taskETA)}</td>
                  <td>
                    <i
                      className="bi bi-check-circle-fill text-success action-icon"
                      onClick={() => onMarkAsDone(index)}
                      style={{ cursor: 'pointer' }}
                      title="Mark as Done"
                    ></i>
                    <i
                      className="bi bi-pencil-square text-primary action-icon ms-3"
                      onClick={() => onEdit(index)}
                      style={{ cursor: 'pointer' }}
                      title="Edit Task"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Tasks Added yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
