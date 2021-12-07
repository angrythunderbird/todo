import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';


const TodoList = ({ todos }) => {

  const todoElements = todos.map(item => {
    // const listItemStyle = item.important ? 'list-group-item-primary' : 'list-group-item-secondary';
    return (
      <TodoListItem { ...item } key={item.id.toString()} />
    )
  })

  return (
    <ul className="list-group todo-list">
      { todoElements }
    </ul>
  );
};

export default TodoList;