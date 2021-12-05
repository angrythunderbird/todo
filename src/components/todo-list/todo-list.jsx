import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';


const TodoList = ({ todos }) => {

  const todoElements = todos.map((item, i) => {
    const listItemStyle = item.important ? 'list-group-item-primary' : 'list-group-item-secondary';

    return (
      <li key={i.toString()} className={"list-group-item item shadow-sm rounded " + listItemStyle}>
        <span className="marker"></span>
        <TodoListItem { ...item } />
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      { todoElements }
    </ul>
  );
};

export default TodoList;