import React from 'react'
import Radio from '../../UI/Radio'
interface FilterTodoProps {
  filterTodo(e: React.ChangeEvent<HTMLInputElement>): void
}

const FilterTodo: React.FC<FilterTodoProps> = ({ filterTodo }) => {
  return (
    <div className="p-4 bg-sky-500 flex">
      <Radio
        value="all"
        onChange={filterTodo}
        isDefaultChecked={true}
        name="filter-group"
        label="All"
        classNameLable='rounded-l-lg'
      />
      <Radio
        value="completed"
        onChange={filterTodo}
        name="filter-group"
        label="Completed"
      />
      <Radio
        value="no-completed"
        onChange={filterTodo}
        name="filter-group"
        label="No-completed"
      />
      <Radio
        value="priority"
        onChange={filterTodo}
        name="filter-group"
        label="Priority"
        classNameLable='rounded-r-lg'
      />
    </div>
  )
}

export default FilterTodo
