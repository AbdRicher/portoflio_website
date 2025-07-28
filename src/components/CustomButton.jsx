
import React from 'react'

export default function CustomButton({title,customcss,onclick}) {
  return (
   <div 
  className={`flex justify-center items-center hover:cursor-pointer text-base sm:text-lg py-1 sm:py-2 px-3 sm:px-4 mr-3 sm:mr-5 border-amber-50 border-1 border-solid ${customcss} hover:bg-(--font_color) hover:text-black transition duration-400 linear`} 
  onClick={onclick}
>
  {title}
</div>
  )
}
