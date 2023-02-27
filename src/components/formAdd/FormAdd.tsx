import React, { useState } from 'react'

interface FormAddProps {
  addTodo(title: string): void
}
const defaultTitleValue = ''
const FormAdd: React.FC<FormAddProps> = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState<string>(defaultTitleValue)

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (todoTitle.length == 0) {
      return
    }
    addTodo(todoTitle)
    setTodoTitle(defaultTitleValue)
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }
  return (
    <form onSubmit={onSubmit} className="bg-sky-500 p-4 mb-2 flex">
      <input
        className="bg-sky-200 flex-1 outline-none pl-2 placeholder:text-sm"
        type="text"
        placeholder="Input text for your new todo"
        value={todoTitle}
        onChange={(e) => onChangeTitle(e)}
      />
      <button
        className="p-1 bg-orange-400"
        // onClick={() => {
        //   addTodo(todoTitle)
        //   setTodoTitle('')
        // }}
      >
        Add
      </button>
    </form>
  )
}

export default FormAdd
