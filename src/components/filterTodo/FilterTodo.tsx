import React from 'react'
interface FilterTodoProps {
  filterTodo(e: React.ChangeEvent<HTMLInputElement>): void
}

const FilterTodo: React.FC<FilterTodoProps> = ({ filterTodo }) => {
  return (
    <div className="p-4 bg-sky-500 flex gap-2">

      <input
        type="radio"
        defaultChecked
        id="all"
        value="all"
        name="filter-group"
        onChange={(e) => filterTodo(e)}
      />
      <label htmlFor="all"  className='cursor-pointer'>All</label>
      <input
        type="radio"
        id="completed"
        value="compleated"
        name="filter-group"
        onChange={(e) => filterTodo(e)}
      />
      <label htmlFor="completed" className='cursor-pointer'>Completed</label>
      <input
        type="radio"
        id="no-completed"
        value="no completed"
        name="filter-group"
        onChange={(e) => filterTodo(e)}
      />
      <label htmlFor="no-completed" className='cursor-pointer'>No completed</label>
      <input
        type="radio"
        id="priority"
        value="priority"
        name="filter-group"
        onChange={(e) => filterTodo(e)}
      />
      <label htmlFor="priority" className='cursor-pointer'>Priority</label>
    </div>
  )
}


export default FilterTodo
