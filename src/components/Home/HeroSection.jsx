"use client"
import React from 'react'
import Container from '../Container'
import CustomButton from '../CustomButton'
import { Image } from 'react-bootstrap'

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume/CV.pdf"; // relative to /public
  link.download = "CV.pdf";
  link.click();
};
export default function HeroSection() {
  return (
    <div className=''  >
      <Container classname={"flex flex-row justify-center max-w-full"} >
        {/* {left Section} */}
       <section className="w-full min-h-screen bg-gradient-to-b from-black via-[#0f1115] to-black text-white px-8 py-20 flex flex-col md:flex-row bg-black md:px-16 ">
  
  {/* Left Section */}
  <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6">
    <h4 className="text-(--font_color) text-2xl">Hello!</h4>
    <h1 className="text-white text-5xl font-bold leading-tight">
      I'm Abdullah Amjad, <br />
      a MERN & AI Developer
    </h1>

    {/* Buttons */}
    <div className="flex gap-4 mt-6 text-white ">
      <CustomButton title="More About Me" />
      <div className={`btn1 hover:cursor-pointer text-lg py-2 px-4 mr-5 border-amber-50 border-1 border-solid hover:bg-(--font_color) hover:text-black duration-400 linear`} onClick={handleDownload}>Get My CV</div>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
    <Image
      src="/mypic.jpg"
      alt="Abdullah Amjad"
      width={400}
      height={400}
      className="rounded-xl object-cover max-h-[500px] w-auto"
    />
  </div>
</section>

      </Container>
    </div>
  )
}
