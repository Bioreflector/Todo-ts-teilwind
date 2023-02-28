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
  const result = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      toggleStatusTodo={toggleStatusTodo}
      togglePriority={togglePriority}
    />
  ))

  const content = result.length === 0 ? <p className='mt-8 text-center'>No todo found or the todo list empty</p>: result

  return (
    <ul>
      {content}
    </ul>
  )
}

export default TodoList
