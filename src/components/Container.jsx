import React from 'react'

export default function Container({classname,children}) {
  return (
    <div className={`max-w-[100%] max-auto ${classname}`} >
      {children}
    </div>
  )
}
