import TodoListItem from './todo-list-item';


const TodoList = ({ todos }) => {

  const todoElements = todos.map((item, i) => {
    return (
      <li key={i.toString()} className="list-group-item">
        <TodoListItem { ...item } />
      </li>
    )
  })

  return (
    <ul className="list-group">
      { todoElements }
    </ul>
  );
};

export default TodoList;