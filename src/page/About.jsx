import React from 'react'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to our website! We are a team of passionate writers who love to share knowledge, insights, and experiences through our blog posts.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-8">
        Our mission is to provide valuable content to our readers, covering a wide range of topics including technology, lifestyle, health, and more.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
        <li>Informative blog posts on various topics</li>
        <li>Tips, tricks, and how-to guides</li>
        <li>Insights and analysis</li>
        <li>Engaging content to keep you entertained</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample blog post cards */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src='https://picsum.photos/200/200' alt="Blog Post 1" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5 Tips for a Healthy Lifestyle</h3>
            <p className="text-gray-600 mb-4">Maintaining a healthy lifestyle is essential for overall well-being. Here are five tips to help you get started.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src='https://picsum.photos/200/200' alt="Blog Post 2" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Future of Artificial Intelligence</h3>
            <p className="text-gray-600 mb-4">Artificial intelligence is shaping the future in various industries. Learn more about its potential and challenges.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src='https://picsum.photos/200/200' alt="Blog Post 3" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">10 Must-Have Gadgets for Tech Enthusiasts</h3>
            <p className="text-gray-600 mb-4">Discover the latest and coolest gadgets that every tech enthusiast should consider adding to their collection.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default About