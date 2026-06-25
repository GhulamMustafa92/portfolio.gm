export default function About() {
  return (
    <div id="work" className="max-w-5xl mx-auto p-5">
      <h1 className="flex justify-center text-3xl font-bold">
        <span className="text-white">About My </span>{" "}
        <span className="text-blue-600 mx-1"> Journey</span>
      </h1>
      <h3 className="flex justify-center py-2 mb-4">
        <span className="w-30 h-1 rounded-full my-2 bg-blue-600 text-center text-white"></span>
      </h3>

      <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-start">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl flex text-blue-600 font-semibold mb-4">
            <span className="w-6 mt-2 mr-2 h-6 border-2 border-blue-600 rounded-full"></span>{" "}
            Work Experience
          </h1>

          <div className="grid grid-cols-[5%_95%] relative">
            {/* Timeline Item 1 */}
            <span className="absolute w-8 -left-3 mt-7 flex justify-center items-center h-8 border-2 border-blue-600 rounded-full">
              💻
            </span>
            <div className="h-40 w-1 rounded-full bg-blue-600 mt-16"></div>
            <div className="border border-gray-700 bg-black rounded-lg my-6 p-5 w-full lg:w-[28rem]">
              <h3 className="font-semibold pb-2">
                Frontend Developer & Team Lead
              </h3>
              <h4 className="text-gray-500 pb-2">Gujrat IT & HUB</h4>
              <button className="border text-blue-600 rounded-3xl px-3 text-sm">
                Jun 2026-Present
              </button>
              <ul className="text-sm py-2 list-disc list-inside text-gray-400">
                <li>
                  Led frontend architecture and development using React.js.
                </li>
                <li>Built reusable UI components and optimized performance.</li>
                <li>Mentored junior developers and conducted code reviews.</li>
              </ul>
            </div>

            {/* Timeline Item 2 */}
            <span className="absolute w-8 -left-3 top-62 mt-7 flex justify-center items-center h-8 border-2 border-blue-600 rounded-full">
              🚀
            </span>
            <div className="h-40 w-1 rounded-full bg-blue-600 mt-16"></div>
            <div className="border border-gray-700 bg-black rounded-lg my-6 p-5 w-full lg:w-[28rem]">
              <h3 className="font-semibold pb-2">
                Frontend Developer & Team Lead
              </h3>
              <h4 className="text-gray-500 pb-2">Gujrat IT & HUB</h4>
              <button className="border text-blue-600 rounded-3xl px-3 text-sm">
                Jun 2026-Present
              </button>
              <ul className="text-sm py-2 list-disc list-inside text-gray-500">
                <li>
                  Led frontend architecture and development using React.js.
                </li>
                <li>Built reusable UI components and optimized performance.</li>
                <li>Mentored junior developers and conducted code reviews.</li>
              </ul>
            </div>

            {/* Timeline Item 3 */}
            <span className="absolute w-8 -left-3 top-125 mt-7 flex justify-center items-center h-8 border-2 border-blue-600 rounded-full">
              👨‍💻
            </span>
            <div className="h-40 w-1 rounded-full bg-blue-600 mt-16"></div>
            <div className="border border-gray-700 bg-black rounded-lg my-6 p-5 w-full lg:w-[28rem]">
              <h3 className="font-semibold pb-2">
                Frontend Developer & Team Lead
              </h3>
              <h4 className="text-gray-500 pb-2">Gujrat IT & HUB</h4>
              <button className="border text-blue-600 rounded-3xl px-3 text-sm">
                Jun 2026-Present
              </button>
              <ul className="text-sm py-2 list-disc list-inside text-gray-400">
                <li>
                  Led frontend architecture and development using React.js.
                </li>
                <li>Built reusable UI components and optimized performance.</li>
                <li>Mentored junior developers and conducted code reviews.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h1 className="text-2xl flex  text-blue-600 font-semibold mb-4">
            My Development Philosophy
          </h1>
          <div className="border border-gray-700 text-gray-500  bg-black rounded-lg mt-10 mb-6 p-5 w-full lg:w-[28rem]">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-blue-600">
                  React.JS, Node, JavaScript
                </span>
                : Architecting type-safe, scalable frontend applications. I
                leverage React.js Server Actions and SSR for maximum performance
                and SEO.
              </li>
              <li>
                <span className="text-blue-600">
                  MERN Stack, MongoDB, Node.js, Convex
                </span>
                : Building robust backend architectures. I specialize in both
                traditional REST APIs (Express/Mongo) and modern serverless
                backends for flexible full-stack solutions.
              </li>
              <li>
                <span className="text-blue-600">
                  TanStack Query, Redux Toolkit, Zod
                </span>
                : Managing complex server state and enforcing strict data
                validation. I ensure robust data flow with optimized caching and
                type integrity.
              </li>
              <li>
                <span className="text-blue-600">
                  Tailwind CSS, Shadcn UI, Framer Motion
                </span>
                : Expertly crafting clean, animated, and accessible UIs. I
                guarantee pixel-perfect fidelity from complex Figma mockups.{" "}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-gray-700 text-gray-300 bg-black rounded-lg my-6 p-5 md:w-113">
            <div className="border border-gray-700 rounded-lg p-5 flex flex-col justify-center">
              <h2 className="text-xl mb-2">🧠</h2>
              <h1 className="text-sm font-normal text-blue-600 mb-2">
                Analytical Problem Solving
              </h1>
              <p className="text-gray-400 text-[12px] leading-relaxed">
                I enjoy breaking down complex problems into manageable
                solutions.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-5 flex flex-col justify-center">
              <h2 className="text-3xl mb-3">📚</h2>
              <h1 className="text-sm font-normal text-blue-600 mb-2">
                Lifelong Learning
              </h1>
              <p className="text-gray-400 text-[12px] leading-relaxed">
                Committed to staying updated with the latest web technologies.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-[10px] mx-1 -mt-2 my-1 text-blue-600">Upcoming Learning Goals</h1>
            <button className="text-[10px] border text-blue-600 border-gray-700 rounded-2xl px-3 py-1 ">AI Automation</button>
            <button className="text-[10px] border text-blue-600 border-gray-700 rounded-2xl px-3 py-1 mx-2">Machine Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
}
