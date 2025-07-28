import CarouselDarkVariantExample from '@/components/CardComponent'
import React from 'react'
export default function projects() {
  return (
   <section className="py-12 px-4 sm:px-6 lg:px-8">
  <section className="mb-20 rounded-xl py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
      My Creative Work
    </h2>
    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
      Each project represents a unique challenge I've solved, blending technical expertise with creative problem-solving. 
      From AI applications to responsive web designs, these works showcase my versatility across different domains.
    </p>
    <div className="flex justify-center gap-4">
      <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
      <span className="h-1 w-6 bg-teal-400 rounded-full"></span>
      <span className="h-1 w-3 bg-purple-500 rounded-full"></span>
    </div>
  </div>
</section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project 1 - Netflix Clone */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300"  >
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={"Netflix Clone"} 
        path={["/Netflix/slide1.png","/Netflix/slide2.png","/Netflix/slide3.png"]} 
        label={["Front Page","FAQs Section","Footer"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Netflix Clone</h3>
        <p className="text-gray-400 mb-4">A responsive Netflix UI clone with movie listings and hover effects</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Next.js</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
        </div>
      </div>
    </div>

    {/* Project 2 - Tempertaure Analysis */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500 transition-all duration-300">
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={"Tempertaure Analysis"} 
        path={["/temp_ana/dataframe1.png","/temp_ana/analysis2.png","/temp_ana/graph3.png"]} 
        label={["DataFrame","Analysis","Graph Plotting"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Spotify Clone (In Progress)</h3>
        <p className="text-gray-400 mb-4">Music player with playback controls and local file handling</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Kaggle</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Pandas</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Numpy</span>
        </div>
      </div>
    </div>

    {/* Project 3 - Emotion Detector */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={"Emotion Detector"} 
        path={["/Emotion_Dectector/slide1.png","/Emotion_Dectector/slide2.png","/Emotion_Dectector/slide3.png"]} 
        label={["Text Input Sad","Other Emotions","Other Emotions"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Emotion Detector from Text</h3>
        <p className="text-gray-400 mb-4">NLP system that detects emotions like joy, anger, sadness</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Python</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">NLTK</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Scikit-learn</span>
        </div>
      </div>
    </div>

    {/* Project 4 - Anime Movie Recommender */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300">
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={" Anime Movie Recommender"} 
        path={["/anime_recommander/slide1.png","/anime_recommander/slide2.png","/anime_recommander/slide3.png"]} 
        label={["InterFace","Movies","Recommandations"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Movie Recommendation System</h3>
        <p className="text-gray-400 mb-4">Content-based filtering for personalized movie suggestions</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Python</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Pandas</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Flask</span>
        </div>
      </div>
    </div>

    {/* Project 5 - Healthcare AI */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={"American Roofing"} 
        path={["/am_roof/slide1.png","/am_roof/slide2.png","/am_roof/slide3.png"]} 
        label={["Interface","Form Submission","Contact with Admin(Personal)"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">American Roofing</h3>
        <p className="text-gray-400 mb-4">MERN stack application Client Project with Customization of Frontend and backend Qureies through Admin Panel</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">MERN Stack</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Nest Js</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">CMS System</span>
        </div>
      </div>
    </div>

    {/* Project 6 - Credit Card Fraud */}
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-teal-500 transition-all duration-300">
      <CarouselDarkVariantExample customcss={"pt-10"}
        title={"Old Porfilio Website"} 
        path={["/old_pf/slide1.png","/old_pf/slide2.png","/old_pf/slide2.png"]} 
        label={["Projects","Footer","About"]}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
        <p className="text-gray-400 mb-4">My Old Portflio Website in React and JavaScript</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
