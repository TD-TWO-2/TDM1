import React from 'react'
import './Button.css'
const Button = ({btnTitle}) => {
  return (
    <button className='button w-100 m-0'>{btnTitle}</button>
  )
}

export default Button