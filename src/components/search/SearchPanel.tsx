import React, { useMemo } from 'react'

interface SearchPanelProps {
  changeSerchText(e: React.ChangeEvent<HTMLInputElement>): void
  serchText: string
}

const SearchPanel: React.FC<SearchPanelProps> = ({ changeSerchText , serchText }) => {

  

  const focusClass = useMemo(()=>{
    const result = serchText ? 'text-xs -top-0.5 text-green-500' : ''
    return result
  },[serchText])

  return (
    <div className="relative mb-5 pt-4">
      <input
        className="border-b-2 py-1 w-full focus:border-green-500 focus:outline-none"
        type="text"
        id="search"
        onChange={(e) => changeSerchText(e)}
      />
      <label
        className={`absolute left-0 cursor-text text-slate-500 ${focusClass}`}
        htmlFor="search">
        Search
      </label>
    </div>
  )
}

export default SearchPanel
