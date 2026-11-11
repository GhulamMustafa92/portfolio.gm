const experience = [
  {
    icon: "💻",
    role: "Frontend Developer & Team Lead",
    company: "Gujrat IT & HUB",
    period: "Jun 2026 - Present",
    points: [
      "Led frontend architecture and development using React.js.",
      "Built reusable UI components and optimized performance.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    icon: "🚀",
    role: "Frontend Developer & Team Lead",
    company: "Gujrat IT & HUB",
    period: "Jun 2026 - Present",
    points: [
      "Led frontend architecture and development using React.js.",
      "Built reusable UI components and optimized performance.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    icon: "👨‍💻",
    role: "Frontend Developer & Team Lead",
    company: "Gujrat IT & HUB",
    period: "Jun 2026 - Present",
    points: [
      "Led frontend architecture and development using React.js.",
      "Built reusable UI components and optimized performance.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
];

const philosophy = [
  {
    title: "React.JS, Node, JavaScript",
    text: "Architecting type-safe, scalable frontend applications. I leverage React.js Server Actions and SSR for maximum performance and SEO.",
  },
  {
    title: "MERN Stack, MongoDB, Node.js, Convex",
    text: "Building robust backend architectures. I specialize in both traditional REST APIs (Express/Mongo) and modern serverless backends for flexible full-stack solutions.",
  },
  {
    title: "TanStack Query, Redux Toolkit, Zod",
    text: "Managing complex server state and enforcing strict data validation. I ensure robust data flow with optimized caching and type integrity.",
  },
  {
    title: "Tailwind CSS, Shadcn UI, Framer Motion",
    text: "Expertly crafting clean, animated, and accessible UIs. I guarantee pixel-perfect fidelity from complex Figma mockups.",
  },
];

const cardBase =
  "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_#2563eb]";

export default function About() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full px-4 py-1 mb-4">
          About Me
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          About My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Experience */}
        <div>
          <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-base shadow-[0_0_20px_-4px_#06b6d4]">
              💼
            </span>
            Work Experience
          </h2>

          <div className="relative ml-4 border-l border-white/10 space-y-8 pl-8">
            {experience.map((item, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[3.15rem] top-4 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/50 bg-black text-lg shadow-[0_0_18px_-4px_#2563eb]">
                  {item.icon}
                </span>

                <div className={`${cardBase} p-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">{item.role}</h3>
                      <h4 className="text-sm text-gray-400 mt-1">{item.company}</h4>
                    </div>
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Philosophy */}
        <div>
          <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-base shadow-[0_0_20px_-4px_#06b6d4]">
              🎯
            </span>
            My Development Philosophy
          </h2>

          <div className="space-y-4">
            {philosophy.map((item, i) => (
              <div key={i} className={`${cardBase} p-5 flex gap-4`}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400 border border-blue-500/20">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-blue-400">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`${cardBase} p-5`}>
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-sm font-semibold text-white mb-1">Analytical Problem Solving</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                I enjoy breaking down complex problems into manageable solutions.
              </p>
            </div>
            <div className={`${cardBase} p-5`}>
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-sm font-semibold text-white mb-1">Lifelong Learning</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Committed to staying updated with the latest web technologies.
              </p>
            </div>
          </div>

          {/* Learning goals */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Upcoming Learning Goals
            </h3>
            <div className="flex flex-wrap gap-2">
              {["AI Automation", "Machine Learning"].map((goal) => (
                <span
                  key={goal}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-400/10"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}