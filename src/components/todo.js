import useTodos from "../hooks/useTodo"

const initialTodos = [
  { id: 1,  title: 'Learn React'   },
  { id: 2,  title: 'Learn Node.js' },
]

const Todo = () => {
  const [ todos, addTodo, deleteTodo ] = useTodos(initialTodos);

  return (
    <>
      <button onClick={() => addTodo({ title: 'New task' })}>
        Add todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo;