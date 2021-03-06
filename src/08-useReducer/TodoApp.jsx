import { TodoAdd, TodoList } from '.'
import { useTodos } from '../hooks/useTodos'

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, pendingTodosCount, todosCount } = useTodos()

  return (
    <>
      <h1>
        Todo App : {todosCount} <small>pendintes : {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7 ">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
