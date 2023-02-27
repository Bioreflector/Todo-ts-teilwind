import React from 'react'
import { ITodo } from '../../interfeices'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: ITodo[]
  removeTodo(id: number): void
  toggleStatusTodo(id: number): void
  togglePriority(id:number):void
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  removeTodo,
  toggleStatusTodo,
  togglePriority
}) => {
  if (todos.length === 0) {
    return <p className='text-center'>Todo empty</p>
  }
  const result = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      toggleStatusTodo={toggleStatusTodo}
      togglePriority={togglePriority}
    />
  ))

  return (
    <ul>
      {result}
    </ul>
  )
}

export default TodoList
