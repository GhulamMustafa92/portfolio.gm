import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import myImg from "../assets/my.png"; // Preloader.jsx src/components mein hai to yehi path; warna adjust karein
import typing from "../assets/typing.mp3";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const root = useRef(null);

  useEffect(() => {
    if (!loading) return;

    const typingAudio = new Audio(typing);
    typingAudio.loop = true;
    typingAudio.volume = 0.5;

    const startTyping = () => {
      typingAudio.currentTime = 0;
      typingAudio.play().catch(() => {}); // autoplay block hua to silently ignore
    };
    const stopTyping = () => {
      typingAudio.pause();
      typingAudio.currentTime = 0;
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoading(false), // exit animation ke baad preloader remove
      });

      // 1) PORTFOLIO letters
      tl.fromTo(
        ".p-letter",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      )
        .fromTo(
          ".p-dot",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        // 2) HELLO, I'M: letter by letter neeche se upar + typing sound
        .call(startTyping, null, "+=0.05")
        .fromTo(
          ".h-letter",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<"
        )
        // Name: typing text (ek ek letter) + sound khatam hone par band
        .fromTo(
          ".n-letter",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.01,
            stagger: 0.05,
            ease: "none",
            onComplete: stopTyping,
          },
          "-=0.2"
        )
        // 3) Image
        .fromTo(
          ".p-img",
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
          "-=0.1"
        )
        // 4) Right text
        .fromTo(
          ".p-right",
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        )
        // 5) Exit animation: content upar uth kar fade, phir screen upar slide
        .to(
          ".p-content",
          { y: -60, opacity: 0, duration: 0.5, ease: "power2.in" },
          "+=0.4"
        )
        .to(root.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        });

      // Progress bar
      gsap.fromTo(
        ".p-progress",
        { width: "0%" },
        { width: "100%", duration: 5, ease: "none" }
      );
    }, root);

    return () => {
      ctx.revert();
      stopTyping(); // preloader hatne par bhi sound band
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] w-full overflow-hidden bg-black text-white"
    >
      <div className="p-content relative mx-auto flex h-full  max-w-7xl flex-col items-center justify-center px-4">
        <h1 className="pointer-events-none absolute left-[50%] top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(2rem,10vw,9rem)] font-black tracking-wide text-blue-500">
          {"PORTFOLIO".split("").map((ch, i) => (
            <span key={i} className="p-letter inline-block opacity-0">
              {ch}
            </span>
          ))}
          <span className="p-dot inline-block text-white opacity-0">.</span>
        </h1>

        <div className="relative z-[2] flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
          <div className="p-left max-w-[240px] text-center md:text-right">
            <p className="text-7xl tracking-[0.25em] text-blue-500">
              {["HELLO,", "I'M"].map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block whitespace-nowrap ${wi === 0 ? "mr-[0.3em]" : ""}`}
                >
                  {word.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom"
                    >
                      <span className="h-letter inline-block opacity-0">
                        {ch}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </p>
            <h2 className="mt-1 text-[clamp(4.1rem,5.2vw,4.8rem)] font-bold">
              {["Ghulam", "Mustafa!"].map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block  whitespace-nowrap ${wi === 0 ? "mr-[0.3em]" : ""}`}
                >
                  {word.split("").map((ch, i) => (
                    <span key={i} className="n-letter inline-block opacity-0">
                      {ch}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
          </div>

          <img
            src={myImg}
            alt="me"
            className="p-img h-[clamp(460px,48vw,520px)] w-[clamp(460px,48vw,520px)] opacity-0"
          />

          <div className="p-right max-w-[240px] text-center opacity-0 md:text-left">
            <p className="text-xs tracking-[0.25em] text-blue-500">
              FRONTEND DEVELOPER
            </p>
            <h2 className="mt-1 text-[clamp(1.1rem,2.2vw,1.8rem)] font-bold">
              React • Tailwind • MERN
            </h2>
          </div>
        </div>

        <div className="absolute bottom-[70px] left-1/2 z-[2] h-[3px] w-[min(320px,70vw)] -translate-x-1/2 bg-white/15">
          <div className="p-progress h-full w-0 bg-blue-500"></div>
        </div>

        <p className="absolute bottom-[35px] z-[2] text-xs tracking-[0.35em] text-blue-200/70">
          LOADING EXPERIENCE...
        </p>
      </div>
    </div>
  );
}