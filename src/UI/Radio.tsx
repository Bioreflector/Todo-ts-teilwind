import React from 'react'

interface RadioProps {
    value:string
    isDefaultChecked?:boolean
    name:string
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=> void
    label:string
}

const Radio:React.FC<RadioProps> = (props) => {
    const { value , isDefaultChecked = false , name , onChange ,label } = props
  return (
    <div className='radio'>
        <input
        type="radio"
        defaultChecked = {isDefaultChecked}
        id={value}
        value={value}
        name={name}
        onChange={onChange}
       
      />
      <label htmlFor={value}  className='cursor-pointer'>{label}</label>
    </div>
  )
}
export default Radio
