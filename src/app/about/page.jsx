import Container from '@/components/Container'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function about() {
  return (
   
  <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
  {/* Static Photo Section - Moves to top on mobile */}
  <div className="w-full lg:w-1/3 bg-transparent flex flex-col items-center justify-center p-4 lg:p-8 lg:sticky lg:top-0 lg:h-screen order-1 lg:order-none">
    <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full bg-gray-300 mb-4 lg:mb-8 overflow-hidden">
      <Image
        src={"/mypic_light.jpg"}
        alt="Abdullah Amjad"
        width={256}
        height={256}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="text-center">
      <h1 className="text-2xl lg:text-3xl text-(--font_color) font-bold mb-2">Abdullah Amjad</h1>
      <p className="text-base lg:text-lg text-gray-200 mb-4 lg:mb-6">MERN & AI Developer</p>
      
      <div className="flex justify-center flex-wrap gap-3 mb-4 lg:mb-8 lg:space-x-4">
        <a href="https://github.com/AbdRicher" className="text-gray-200 hover:text-gray-500 text-sm lg:text-base">GitHub</a>
        <a href="https://linkedin.com/in/abdullah-amjad-3209b0285" className="text-gray-200 hover:text-gray-500 text-sm lg:text-base">LinkedIn</a>
        <a href="https://www.kaggle.com/abdullahamjad1234" className="text-gray-200 hover:text-gray-500 text-sm lg:text-base">Kaggle</a>
        <a href="mailto:Abdullah.Work123456@gmail.com" className="text-gray-200 hover:text-gray-500 text-sm lg:text-base">Email</a>
      </div>
      
      <div className="text-xs lg:text-sm text-gray-500">
        <p>Pakistan</p>
        <p>English</p>
      </div>
    </div>
  </div>
  
  {/* Scrollable Content Section - Full width on mobile */}
  <div className="w-full lg:w-2/3 overflow-y-auto p-4 sm:p-6 lg:p-12 order-2 lg:order-none">
    <section className="mb-8 lg:mb-12">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 lg:mb-4">Abdullah Amjad</h1>
      <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4'>Software Developer</h2>
      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
        I am a passionate Student of BS Computer Science in University of Management and Technology (UMT) Lahore. I have theoretical knowledge and practical knowledge in a range of computer science domains, such as Data Science, Data Analysis, and Web Development.

        I have a solid foundation in programming languages like Python and C++ due to my coursework and projects. I also have expertise with database administration and Qurey creation. I have a special interest in data science, and I always work to improve my knowledge of it through independent study and real-world projects.
      </p>
    </section>
    
    <section className="mb-8 lg:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Work Experience</h2>
      
      {/* IPS Technologies Experience */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-1">IPS Technologies</h3>
        <p className="text-(--font_color) mb-3 lg:mb-4">Web Developer Intern</p>
        
        <ul className="list-disc pl-5 mb-3 lg:mb-4 space-y-1 lg:space-y-2 text-gray-300 text-sm sm:text-base">
          <li>Worked on real-world projects using the MERN Stack</li>
          <li>Contributed to AI-based features implementation</li>
          <li>Acquired skills in full-stack development and machine learning applications</li>
        </ul>
        
        <div className="border-t border-gray-700 pt-3 lg:pt-4">
          <p className="text-gray-500 text-xs lg:text-sm">May 2025 - On-Site</p>
        </div>
      </div>

      {/* CodSoft Experience */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-1">CodSoft</h3>
        <p className="text-(--font_color) mb-3 lg:mb-4">Web Developer Intern</p>
        
        <ul className="list-disc pl-5 mb-3 lg:mb-4 space-y-1 lg:space-y-2 text-gray-300 text-sm sm:text-base">
          <li>Gained practical experience in web development and frontend technologies</li>
        </ul>
        
        <div className="border-t border-gray-700 pt-3 lg:pt-4">
          <p className="text-gray-500 text-xs lg:text-sm">Jan 2024 - Remote</p>
        </div>
      </div>

      {/* Freelance Projects */}
      <div className="mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-1">Freelance Projects</h3>
        <p className="text-(--font_color) mb-3 lg:mb-4">Client Work</p>
        
        <ul className="list-disc pl-5 mb-3 lg:mb-4 space-y-1 lg:space-y-2 text-gray-300 text-sm sm:text-base">
          <li>Developed a healthcare AI-based website using MERN Stack</li>
          <li>Completed multiple client-based projects in MERN Stack</li>
          <li>Worked on AI-based Retrieval-Augmented Generation (RAG) systems</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="mt-6 lg:mt-8">
        <h3 className="text-base lg:text-lg font-semibold mb-2">Education</h3>
        <p className="text-gray-300 text-sm sm:text-base">University of Management and Technology (UMT)</p>
        <p className="text-(--font_color) text-sm sm:text-base">Bachelor's in Computer Science</p>
        <p className="text-gray-300 text-xs lg:text-sm">Nov 2022 – Nov 2026 | CGPA: 3.87</p>
      </div>
    </section>
    
    <section className="mb-8 lg:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4">Technical skills</h2>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {/* Core Programming */}
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Python</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">C++</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">JavaScript</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">TypeScript</span>
        
        {/* Web Development */}
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">MERN Stack</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">React</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Next.js</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Node.js</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Express</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">MongoDB</span>
        
        {/* Data Science & AI */}
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Machine Learning</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Deep Learning</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">NLP</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Computer Vision</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Pandas</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">NumPy</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Scikit-learn</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">TensorFlow</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">PyTorch</span>
        
        {/* DevOps & Tools */}
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Git</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Firebase</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">Jupyter</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-xs lg:text-sm">VS Code</span>
      </div>
    </section>
  </div>
</div>
  )
}
