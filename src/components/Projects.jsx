import React from 'react'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import fourth from '../assets/fourth.png'
import comming from '../assets/comming.jpg'
export default function Projects() {
  const projects = [
    {
      img: first,
      link: 'https://evar-x8pt.vercel.app/',
    },
    {
      img: second,
      link: 'https://tech-pilot.vercel.app/',
    },
    {
      img: third,
      link: 'https://bit-bash-lac.vercel.app/',
    },
    {
      img: fourth,
      link: 'https://rently-car-jade.vercel.app/',
    },
    {
      img: comming,
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-white">My</span>{' '}
        <span className="text-blue-600">Projects</span>
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden border-2 border-blue-600 p-0.5 shadow-lg group"
          >
            {/* IMAGE */}
            <img
              src={project.img}
              alt={`Project ${index + 1}`}
              className="w-full h-74 rounded-2xl object-contain"
            />

            {/* OVERLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              ) : (
                <button
                  disabled
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}