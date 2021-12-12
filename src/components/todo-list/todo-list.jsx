import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';


const TodoList = ({ todos, onDelete }) => {

  const todoElements = todos.map(item => {
    return (
      <TodoListItem { ...item }
      key={item.id.toString()}
      onDelete={() => onDelete(item.id)} />
    )
  })

  return (
    <ul className="list-group todo-list">
      { todoElements }
    </ul>
  );
};

export default TodoList;