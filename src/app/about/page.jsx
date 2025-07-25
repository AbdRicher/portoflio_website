import Container from '@/components/Container'
import React from 'react'
import { Image } from 'react-bootstrap'

export default function about() {
  return (
    <Container>
      <div className="flex h-screen">
      {/* Static Photo Section */}
      <div className="w-1/3 bg-transparent flex flex-col items-center justify-center p-8 sticky top-0 h-screen">
        <div className="w-64 h-64 rounded-full bg-gray-300 mb-8 overflow-hidden">
          <Image
  src={"/mypic_light.jpg"}
          />
          <div className="w-full h-full bg-gray-400"></div>
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl text-(--font_color) font-bold mb-2">Abdullah Amjad</h1>
          <p className="text-lg text-gray-200 mb-6">MERN & AI Developer</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/AbdRicher" className="text-gray-200 hover:text-gray-500">GitHub</a>
            <a href="https://linkedin.com/in/abdullah-amjad-3209b0285" className="text-gray-200 hover:text-gray-500">LinkedIn</a>
            <a href="https://www.kaggle.com/abdullahamjad1234" className="text-gray-200 hover:text-gray-500">Kaggle</a>
            <a href="mailto:Abdullah.Work123456@gmail.com" className="text-gray-200 hover:text-gray-500">Email</a>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Pakistan</p>
            <p>English</p>
          </div>
        </div>
      </div>
      
      {/* Scrollable Content Section */}
      <div className="w-2/3 overflow-y-auto p-12">
        <section className="mb-12">
          <h1 className="text-6xl font-bold mb-4">Abdullah Amjad</h1>
          <h2 className='text-3xl font-semibold mb-4' >Software Developer</h2>
          <p className="text-gray-200 leading-relaxed">
            I am a passionate Student of BS Computer Science in University of Management and Technology (UMT) Lahore. I have theoretical knowledge and practical knowledge in a range of computer science domains, such as Data Science, Data Analysis, and Web Development.

I have a solid foundation in programming languages like Python and C++ due to my coursework and projects. I also have expertise with database administration and Qurey creation. I have a special interest in data science, and I always work to improve my knowledge of it through independent study and real-world projects.</p>
        </section>
        
       <section className="mb-12">
  <h2 className="text-5xl font-bold mb-6">Work Experience</h2>
  
  {/* IPS Technologies Experience */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-1">IPS Technologies</h3>
    <p className="text-(--font_color) mb-4">Web Developer Intern</p>
    
    <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
      <li>Worked on real-world projects using the MERN Stack</li>
      <li>Contributed to AI-based features implementation</li>
      <li>Acquired skills in full-stack development and machine learning applications</li>
    </ul>
    
    <div className="border-t border-gray-700 pt-4">
      <p className="text-gray-500 text-sm">May 2025 - On-Site</p>
    </div>
  </div>

  {/* CodSoft Experience */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-1">CodSoft</h3>
    <p className="text-(--font_color) mb-4">Web Developer Intern</p>
    
    <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
      <li>Gained practical experience in web development and frontend technologies</li>
    </ul>
    
    <div className="border-t border-gray-700 pt-4">
      <p className="text-gray-500 text-sm">Jan 2024 - Remote</p>
    </div>
  </div>

  {/* Freelance Projects */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-1">Freelance Projects</h3>
    <p className="text-(--font_color) mb-4">Client Work</p>
    
    <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
      <li>Developed a healthcare AI-based website using MERN Stack</li>
      <li>Completed multiple client-based projects in MERN Stack</li>
      <li>Worked on AI-based Retrieval-Augmented Generation (RAG) systems</li>
    </ul>
  </div>

  {/* Education Section */}
  <div className="mt-8">
    <h3 className="text-lg font-semibold mb-2">Education</h3>
    <p className="text-gray-300">University of Management and Technology (UMT)</p>
    <p className="text-(--font_color)">Bachelor's in Computer Science</p>
    <p className="text-gray-300 text-sm">Nov 2022 – Nov 2026 | CGPA: 3.87</p>
  </div>
</section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Technical skills</h2>
          {/* Add your skills here */}
          <div className="flex flex-wrap gap-3">
      {/* Core Programming */}
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">C++</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
      
      {/* Web Development */}
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">MERN Stack</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">React</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Next.js</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Express</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
      
      {/* Data Science & AI */}
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">NLP</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Pandas</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">NumPy</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
      
      {/* DevOps & Tools */}
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Git</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Firebase</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Jupyter</span>
      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">VS Code</span>
    </div>
        </section>
      </div>
    </div>
    </Container>
  )
}
