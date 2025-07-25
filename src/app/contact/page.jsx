import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaKaggle } from 'react-icons/fa';

export default function contact() {
  return (
       <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Abdullah Amjad
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Abdullah"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="abdullah@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Location</h4>
                    <p className="text-white">Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Email</h4>
                    <a href="mailto:Abdullah.Work123456@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      Abdullah.Work123456@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Phone</h4>
                    <p className="text-white">+92 313 6491507</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/AbdRicher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/10 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdullah-amjad-3209b0285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-400" />
                </a>
                <a
                  href="https://www.kaggle.com/abdullahamjad1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/10 transition-colors"
                  aria-label="Twitter"
                >
                  <FaKaggle className="text-2xl text-gray-300 hover:text-blue-400" />
                </a>
                <a
                  href="mailto:Abdullah.Work123456@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/10 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-2xl text-gray-300 hover:text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
