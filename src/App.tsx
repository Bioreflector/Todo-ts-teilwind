import { useState } from 'react'
import './App.css'
import FormAdd from './components/formAdd/FormAdd'
import { ITodo } from './interfeices'
import TodoList from './components/todoList/TodoList'
import SearchPanel from './components/search/SearchPanel'
import FilterTodo from './components/filterTodo/FilterTodo'
import data from './data'

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>(data)
  const [serchText, setSearchText] = useState<string>('')
  const [filterValue, setFilterValue] = useState<string>('all')

  
  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      complete: false,
      priority: false
    }
    if(title.length !== 0){
      setTodos((prev) => [...prev, newTodo])
    }
  }

  const removeTodoHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleStatusTodoHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (id === todo.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    )
  }
  const togglePriorityHandler=(id:number)=>{
    setTodos((prev) =>
      prev.map((todo) => {
        if (id === todo.id) {
          return { ...todo, priority: !todo.priority }
        }
        return todo
      })
    )
  }
  const changeSerchTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const serch = (serchText: string) => {
    if (serchText.length === 0) {
      const result = [...todos]
      return result
    }
    const serchedTodo = todos.filter((todo) => todo.title.toLocaleLowerCase().includes(serchText.toLocaleLowerCase()))
    return serchedTodo
  }
  const filter = (state: ITodo[], filter: string) => {
    switch (filter) {
      case 'all':
        return [...state]

      case 'completed':
        return state.filter((item) => item.complete)
      case 'no-completed':
        return state.filter((item) => !item.complete)
      case 'priority':
        return state.filter((item) => item.priority)
      default:
        return [...state]
    }
  }

  const fleterTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  const filtredTodo = filter(serch(serchText), filterValue)

  return (
    <div className="App w-1/2 m-auto">
      <h1 className="text-center text-blue-light">TODO LIST</h1>
      <FormAdd addTodo={addTodoHandler}/>
      <SearchPanel
        changeSerchText={changeSerchTextHandler}
        serchText={serchText}
      />
      <FilterTodo filterTodo={fleterTodoHandler} />
      <TodoList
        todos={filtredTodo}
        togglePriority={togglePriorityHandler}
        removeTodo={removeTodoHandler}
        toggleStatusTodo={toggleStatusTodoHandler}
      />
    </div>
  )
}

export default App
