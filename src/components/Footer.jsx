import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-blue-500 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Ghulam</span>{' '}
            <span className="text-blue-500">Mustafa</span>
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            I am a passionate Full Stack Web Developer specializing in MERN Stack.
            I build modern, responsive, and user-friendly web applications using
            React, Node.js, Express, and MongoDB.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-blue-500 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Projects</li>
            <li className="hover:text-blue-500 cursor-pointer transition">About</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack MERN Apps</li>
            <li>Responsive UI Design</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Contact</h3>
          <p className="text-gray-300 mb-2">📍 Punjab, Pakistan</p>
          <p className="text-gray-300 mb-2">📧 mustafa@example.com</p>
          <p className="text-gray-300 mb-4">📞 +92 300 0000000</p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">GitHub</a>
            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center font-semibold text-blue-500 text-sm">
        © {new Date().getFullYear()} GM DEV's. All Rights Reserved.
      </div>
    </footer>
  )
}