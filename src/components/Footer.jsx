import React from 'react'

function Footer() {
  return (
    <div className=''>
        
        <footer className="bg-blue-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-sm hover:text-gray-300">About</a></li>
                        <li><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
                        <li><a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer