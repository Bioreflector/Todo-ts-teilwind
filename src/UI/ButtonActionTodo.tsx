import React from 'react'
interface ButtonActionTodoProps {
  children: any
  onClick?:(event: React.MouseEvent) => void
  isDisabled?: boolean
  className?: string
  title: string
}
const ButtonActionTodo: React.FC<ButtonActionTodoProps> = (props) => {
  const {
    onClick,
    children,
    isDisabled = false,
    className,
    title,
  } = props

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${className} p-1 border border-indigo-200 rounded hover:bg-indigo-200`}
      title={title}>
      {children}
    </button>
  )
}

export default ButtonActionTodo
