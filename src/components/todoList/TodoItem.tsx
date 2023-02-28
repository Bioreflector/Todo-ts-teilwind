import React from 'react'
import { ITodo } from '../../interfeices'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import ButtonActionTodo from '../../UI/ButtonActionTodo'

interface ToDoProps {
  todo: ITodo
  removeTodo(id: number): void
  toggleStatusTodo(id: number): void
  togglePriority(id: number): void
}
const TodoItem: React.FC<ToDoProps> = ({
  todo,
  removeTodo,
  toggleStatusTodo,
  togglePriority,
}) => {
  return (
    <li
      className={`flex justify-between border p-1 mb-2 ${
        todo.complete ? 'bg-sky-200' : ''
      }`}>
      <div className="flex">
        <input
          className="mr-1 cursor-pointer"
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleStatusTodo(todo.id)}
        />
        <p className={todo.complete ? 'line-through text-gray-500' : ''}>
          {todo.title}
        </p>
      </div>
      <div className="flex gap-3">
        <ButtonActionTodo
          className={todo.priority ? 'text-green-500' : 'text-gray-500'}
          title="Priority"
          onClick={() => togglePriority(todo.id)}>
          <AiFillStar />
        </ButtonActionTodo>
        <ButtonActionTodo
          className="text-red-500"
          title="Delete"
          onClick={() => removeTodo(todo.id)}>
          <AiFillDelete />
        </ButtonActionTodo>
      </div>
    </li>
  )
}
export default TodoItem
