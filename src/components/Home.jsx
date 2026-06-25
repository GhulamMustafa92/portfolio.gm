import html from "../SVG/html.svg";
import css from "../SVG/css.svg";
import js from "../SVG/js.svg";
import react from "../SVG/react.svg";
import express from "../SVG/express.svg";
import mongodb from "../SVG/mongodb.svg";
import node from "../SVG/node.svg";
import git from "../SVG/git.svg";
import tailwind from '../SVG/tailwind.svg'
import my from "../assets/my.png";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Backend Developer","MERN Stack Developer"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="grid grid-cols-1 max-w-6xl mx-auto py-4 my-18 md:grid-cols-2  items-center gap-10 px-6 md:px-16">
      {/* Left Text Section */}
      <div className="space-y-6">
       
        <div className="space-y-4">
          <h1 className="text-4xl text-white font-bold text-center md:text-left">
             <div className="">Hey I'm  </div><span className="text-blue-600" ref={typedRef}></span>
            <div className="text-xl"></div>
          </h1>

          <p className="text-white leading-relaxed text-center md:text-left pr-4">
            I’m Ghulam Mustafa, a passionate MERN Stack Developer and Founder of
            NXTVEL Technologies. I specialize in building fast, scalable, and
            secure web applications using the MERN stack <span className="text-blue-600"> (MongoDB, Express.js,
            React.js, Node.js) </span> and Next.js. I focus on system design, performance
            optimization, and automation to deliver real-world business value.
          </p>
          <div className="flex justify-center md:justify-start">
          <button className="bg-blue-700  text-white px-4 py-2 rounded-md  transition-colors">
            Check portFolio
          </button>
          <button className=" mx-2 px-4 py-2 rounded-md text-blue-600 text-sm border  bg-blur-3xl border-blue-600 transition-colors">
            Contact Me
          </button>
          </div>
        </div>
      </div>

      {/* Right Circles Section */}
      <div className="flex justify-center items-center">
        {/* Outer Circle */}
        <div className="border-dashed border-2 md:mt-13 transition-all duration-1000 cursor-pointer  shadow-[0_0_30px_#1447e6] border-blue-700 p-20 relative rounded-full">
          {/* Outer Icons */}
          <div className="absolute  inset-0 animate-spin-slow-2 z-100  ">
            <span className="bg-black  absolute animate-spin-child-2 top-[27%] left-1/2 -translate-x-1/2 -translate-y-32 px-2">
              <img src={express} alt="" className="w-10 h-10" />
            </span>
            <span className="absolute  animate-spin-child-2 top-[112%] left-[65%] translate-x-1/2 -translate-y-32 px-2">
              <img src={mongodb} alt="" className="w-15 h-15  " />
            </span>
            <span className="absolute  animate-spin-child-2 top-[55%] left-[62%] -translate-x-[-160%] -translate-y-32 px-2">
              <img src={node} alt="" className="w-12 h-12 " />
            </span>
            <span className="absolute  animate-spin-child-2 top-[55%] -left-5 -translate-y-32 px-2">
              <img src={git} alt="" className="w-13 h-13 " />
            </span>
            <span className="absolute z-20 animate-spin-child-2 translate-x-10 top-[114%] -translate-y-32 px-2">
              <img src={react} alt="" className="w-13 h-13" />
            </span>
          </div>

          {/* Inner Circle */}
          <div className="relative border-2 border-dashed  border-blue-800 rounded-full h-60 w-60">
            <div className="absolute inset-0 animate-spin-slow">
              <span className="animate-spin-child absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-32 px-2">
                <img src={html} alt="" className="w-10 h-10 z-0" />
              </span>
              <span className="animate-spin-child absolute top-[147%] left-1/2 -translate-x-1/2 -translate-y-32 px-2">
                <img src={css} alt="" className="w-10 h-10 z-0" />
              </span>
              <span className="animate-spin-child absolute top-[95%] left-1/2 -translate-x-[-160%] -translate-y-32 px-2">
                <img src={js} alt="" className="w-10 h-10 z-0" />
              </span>
              <span className="animate-spin-child absolute top-[95%] -translate-x-1/2 -translate-y-32 px-2">
                <img src={tailwind} alt="" className="w-13 h-13 z-0" />
              </span>
            </div>
            <div className="relative w-95 -top-17 right-17">
              <img src={my} className=" rounded-b-full z-20" alt="" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
