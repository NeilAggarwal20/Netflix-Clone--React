import React from 'react'
import youtube_icon from '/src/assets/assets/youtube_icon.png'
import twitter_icon from '/src/assets/assets/twitter_icon.png'
import instagram_icon from '/src/assets/assets/instagram_icon.png'
import facebook_icon from '/src/assets/assets/facebook_icon.png'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-8 py-8">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        <img src={youtube_icon} alt="YouTube" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
        <img src={twitter_icon} alt="Twitter" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
        <img src={instagram_icon} alt="Instagram" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
        <img src={facebook_icon} alt="Facebook" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
      </div>

      {/* Links Grid */}
      <ul className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-center sm:text-left">
        <li className="cursor-pointer hover:text-gray-300">Audio Description</li>
        <li className="cursor-pointer hover:text-gray-300">Help Centre</li>
        <li className="cursor-pointer hover:text-gray-300">Gift Cards</li>
        <li className="cursor-pointer hover:text-gray-300">Media Centre</li>
        <li className="cursor-pointer hover:text-gray-300">Investor Relations</li>
        <li className="cursor-pointer hover:text-gray-300">Jobs</li>
        <li className="cursor-pointer hover:text-gray-300">Terms of Use</li>
        <li className="cursor-pointer hover:text-gray-300">Privacy</li>
        <li className="cursor-pointer hover:text-gray-300">Legal Notices</li>
        <li className="cursor-pointer hover:text-gray-300">Cookie Preferences</li>
        <li className="cursor-pointer hover:text-gray-300">Corporate Information</li>
        <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
      </ul>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-xs mt-8 select-none">
        ©️ 1997-2023 Netflix, Inc.
      </p>
    </footer>
  )
}

export default Footer
