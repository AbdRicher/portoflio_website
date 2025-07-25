
import React from 'react'

export default function CustomButton({title,customcss,onclick}) {
  return (
   <div className={`btn1 hover:cursor-pointer text-lg py-2 px-4 mr-5 border-amber-50 border-1 border-solid ${customcss} hover:bg-(--font_color) hover:text-black duration-400 linear`} onClick={onclick}>{title}</div>
  )
}
