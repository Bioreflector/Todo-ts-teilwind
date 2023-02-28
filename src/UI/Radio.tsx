import React from 'react'

interface RadioProps {
  value: string
  isDefaultChecked?: boolean
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  classNameLable?: string
}

const Radio: React.FC<RadioProps> = (props) => {
  const { value, isDefaultChecked = false, name, onChange, label ,classNameLable } = props
  return (
    <div className="relative overflow-hidden">
      <input
        className="w-1 h-1 absolute -left-1 peer"
        type="radio"
        defaultChecked={isDefaultChecked}
        id={value}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label
        htmlFor={value}
        className={`${classNameLable} cursor-pointer bg-sky-400 box-border py-1 px-4 block peer-checked:bg-sky-300`}>
        {label}
      </label>
    </div>
  )
}
export default Radio
