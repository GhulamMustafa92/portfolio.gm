import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import myImg from "../assets/myimg.png"; // Preloader.jsx src/components mein hai to yehi path; warna adjust karein
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
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
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
          "<",
        )
        // Name: letter by letter neeche se upar, sound chalta rehta hai
        .fromTo(
          ".n-letter",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // 3) Image: white silhouette + glow se asli colors mein
        .fromTo(
          ".p-img",
          {
            opacity: 0,
            scale: 0.6,
            filter:
              "brightness(0) invert(1) drop-shadow(0px 0px 40px rgba(255,255,255,0.9))",
          },
          {
            opacity: 1,
            scale: 1,
            filter:
              "brightness(1) invert(0) drop-shadow(0px 0px 0px rgba(255,255,255,0))",
            duration: 1.2,
            ease: "power2.out",
            clearProps: "filter", // animation ke baad filter hata do
          },
          "-=0.1",
        )
        // 4) Right text (MERN STACK): letter by letter neeche se upar
        .fromTo(
          ".r-letter",
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // 4b) React • Express • MONGODB: letter by letter right se left + sound yahan band
        .fromTo(
          ".s-letter",
          { xPercent: 110, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
            onComplete: stopTyping,
          },
          "-=0.2",
        )
        // 5) Exit: content zoom + blur fade, blue line phailti hai, phir shutter khulta hai
        .to(
          ".p-content",
          {
            scale: 1.08,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.6,
            ease: "power2.in",
          },
          "+=0.4",
        )
        .fromTo(
          ".p-line",
          { opacity: 1, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" },
          "-=0.25",
        )
        .to(
          ".p-panel-top",
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          ">0.05",
        )
        .to(
          ".p-panel-bottom",
          { yPercent: 100, duration: 0.9, ease: "power4.inOut" },
          "<",
        )
        .to(".p-line", { opacity: 0, duration: 0.3, ease: "none" }, "<0.3");

      tl.duration(13); // poori animation (exit samet) exactly 13 sec

      // Progress bar
      gsap.fromTo(
        ".p-progress",
        { width: "0%" },
        { width: "100%", duration: 13, ease: "none" },
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
      className="fixed inset-0 z-[9999] w-full overflow-hidden text-white"
    >
      {/* Black shutter panels (exit par alag hote hain) */}
      <div className="p-panel-top absolute left-0 top-0 h-1/2 w-full bg-black" />
      <div className="p-panel-bottom absolute bottom-0 left-0 h-1/2 w-full bg-black" />

      {/* Center glowing line (exit par phailti hai) */}
      <div className="p-line pointer-events-none absolute left-0 top-1/2 z-[3] h-[2px] w-full origin-left -translate-y-1/2 bg-blue-500 opacity-0 shadow-[0_0_25px_6px_rgba(59,130,246,0.8)]" />

      <div className="p-content relative mx-auto flex h-full  max-w-7xl flex-col items-center justify-center px-4">
        <h1 className="pointer-events-none absolute left-[50%] top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(2rem,10vw,9rem)] font-black tracking-wide text-blue-500">
          {"PORTFOLIO".split("").map((ch, i) => (
            <span key={i} className="p-letter inline-block opacity-0">
              {ch}
            </span>
          ))}
        </h1>

        <div className="relative z-[2] flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
          <div className="p-left max-w-[240px] text-center md:text-right">
            <p className="text-7xl tracking-[0.25em] text-blue-500">
              {["HELLO,", "I'M"].map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block whitespace-nowrap ${wi === 0 ? "mr-[0.3em]" : "ml-42"}`}
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
            <h2 className="mt-36 leading-none text-[clamp(4.1rem,5vw,4.8rem)] font-bold">
              {" "}
              {["Ghulam", "Mustafa!"].map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block  whitespace-nowrap ${wi === 0 ? "mr-[0.3em]" : "ml-10"}`}
                >
                  {word.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom"
                    >
                      <span className="n-letter inline-block opacity-0">
                        {ch}
                      </span>
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

          <div className="p-right max-w-[240px] text-center md:text-left">
            <p className="text-7xl mt-15 tracking-[0.25em] text-blue-500">
              {"MERN STACK".split(" ").map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block whitespace-nowrap ${wi === 0 ? "mr-[0.3em]" : "ml-10"}`}
                >
                  {word.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom"
                    >
                      <span className="r-letter inline-block opacity-0">
                        {ch}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </p>
            <h2 className="mt-30 text-[clamp(2.4rem,3.3vw,2.3rem)] font-bold">
              {["React", "•", "Express", "•", "MONGODB", "•"].map((word, wi) => (
                <span
                  key={wi}
                  className={`inline-block whitespace-nowrap ${wi < 5 ? "ml-[0.3em]" : ""}`}
                >
                  {word.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden align-bottom"
                    >
                      <span className="s-letter inline-block opacity-0">
                        {ch}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
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