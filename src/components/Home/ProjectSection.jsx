import React from 'react'
import CarouselDarkVariantExample from '../CardComponent'

export default function ProjectSection() {
  return (
    <div className='mt10 flex flex-col justify-center items-center'>
        <h1 className=' my-10 text-4xl font-bold leading-tight' >Recent Projects</h1>
      <CarouselDarkVariantExample title={"American Roofing Next.js Project"} path={["/am_roof/slide1.png","/am_roof/slide2.png","/am_roof/slide3.png"]} label={["Interface","Form Submission","Contact (More on Work Page)"]}/>
    </div>
  )
}
