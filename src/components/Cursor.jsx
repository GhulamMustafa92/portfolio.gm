import { gsap } from "gsap";

export default function Cursor({ children }) {

  const onMove = (e) => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power3.out"
    });

    gsap.to("#cursor2", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power3.out"
    });
  };

  return (
    <div onMouseMove={onMove} className="relative">
      {children}

      {/* Outer Cursor */}
      <div
        id="cursor"
        className="h-8 w-8 shadow-[0_0_30px_#1447e6] border-blue-500 border-2 rounded-full fixed -top-3 -left-3 pointer-events-none z-[9999]"
      />

      {/* Inner Cursor */}
      <div
        id="cursor2"
        className="h-4 w-4 shadow-[0_0_30px_#1447e6] bg-blue-600 rounded-full fixed -top-1 -left-1 pointer-events-none z-[10000]"
      />
    </div>
  );
}
