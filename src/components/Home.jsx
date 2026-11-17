import html from "../SVG/html.svg";
import css from "../SVG/css.svg";
import js from "../SVG/js.svg";
import react from "../SVG/react.svg";
import express from "../SVG/express.svg";
import mongodb from "../SVG/mongodb.svg";
import node from "../SVG/node.svg";
import git from "../SVG/git.svg";
import tailwind from "../SVG/tailwind.svg";
// import my from "../assets/my.png";
import bgmusic from "../assets/bgmusic.aac";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { RiPlayLargeFill, RiPauseLargeFill } from "react-icons/ri";
import myimg from "../assets/myimg.png";
export default function Home() {
  const typedRef = useRef(null);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;

    const startOnClick = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    // pehle autoplay try, block ho to pehle click pe start
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        window.addEventListener("click", startOnClick, { once: true });
      });

    return () => {
      window.removeEventListener("click", startOnClick);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden isolate flow-root min-h-screen"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background Music */}
      <audio ref={audioRef} src={bgmusic} loop />

      <button
        onClick={toggleMusic}
        aria-label={playing ? "Music off" : "Music on"}
        className="fixed right-4 bottom-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 hover:from-blue-400 hover:to-blue-700 text-white text-xl border border-blue-400/40 shadow-[0_0_25px_#1447e6] transition-all duration-300 hover:scale-110 cursor-pointer"
      >
        {playing ? <RiPauseLargeFill /> : <RiPlayLargeFill />}
      </button>

      {/* Background: Blue gradient (desktop + mobile) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,#1e3a8a_0%,#0b1437_40%,#000000_75%)]">
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />
      </div>

      {/* Original Home (unchanged) */}
      <div className="relative z-10">
        <div
          id="home"
          className="grid grid-cols-1 max-w-6xl mx-auto py-4 my-18 md:grid-cols-2  items-center gap-10 px-6 md:px-16"
        >
          {/* Left Text Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl text-white font-bold text-center md:text-left">
                <div className="">Hey I'm </div>
                <span className="text-blue-600" ref={typedRef}></span>
                <div className="text-xl"></div>
              </h1>

              <p className="text-white leading-relaxed text-center md:text-left pr-4">
                I’m Ghulam Mustafa, a passionate MERN Stack Developer and
                Founder of NXTVEL Technologies. I specialize in building fast,
                scalable, and secure web applications using the MERN stack{" "}
                <span className="text-blue-600">
                  {" "}
                  (MongoDB, Express.js, React.js, Node.js){" "}
                </span>{" "}
                and Next.js. I focus on system design, performance optimization,
                and automation to deliver real-world business value.
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
          <div className="flex justify-center items-center z-10">
            {/* Outer Circle */}
            <div className="border-dashed border-2 md:mt-13 transition-all duration-1000 cursor-pointer  shadow-[0_0_30px_#1447e6] border-blue-700 p-20 relative rounded-full">
              {/* Outer Icons */}
              <div className="absolute  inset-0 animate-spin-slow-2 z-10 ">
                <span className="absolute  animate-spin-child-2 top-[27%] left-1/2 -translate-x-1/2 -translate-y-32 px-2">
                  {" "}
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
                <div className="relative w-95 -top-24 right-18 z-100">
                  <img src={myimg} className=" rounded-b-full " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
