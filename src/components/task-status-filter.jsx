import './task-status-filter.css';

const TaskStatusFilter = () => {
  return (
    <div className="task-status-filter">
      <button type="button" className="task-status-btn btn btn-info">All</button>
      <button type="button" className="task-status-btn btn btn btn-outline-secondary">Active</button>
      <button type="button" className="task-status-btn btn btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default TaskStatusFilter;