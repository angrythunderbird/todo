import './todo-list-item.css';

const TodoListItem = (props) => {

  const { label,
        id,
        onDelete,
        onToogleImportant,
        onToogleDone,
        important,
        done } = props;

  const listItemStyle = important ? 'list-group-item-primary' : 'list-group-item-secondary';
  let listItemTextClassNames = 'text';

  if (done) {
    listItemTextClassNames += ' done';
  }

  return (
    <li className={"list-group-item item shadow-sm rounded " + listItemStyle}>
      <span className="marker">{id.toString()}</span>
      <div className="todo-list-item">
        <span className={listItemTextClassNames} onClick={onToogleDone}>{label}</span>
        <button type="button" className="btn btn-outline-success btn-sm float-right todo-list-item-btn" onClick={onToogleImportant}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </button>
        <button type="button" className="btn btn-outline-success btn-sm float-right todo-list-item-btn" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;