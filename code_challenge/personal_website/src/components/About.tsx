import { Sparkle, Mouse } from "lucide-react";

const coreValues = [
  {
    title: "Next.js 13",
    desc: "App dir, Routing, Layouts, Loading UI and API routes.",
  },
  {
    title: "React.js",
    desc: "Hooks, Components, State Management, and UI patterns.",
  },
  {
    title: "Node.js",
    desc: "Building REST APIs, authentication, and backend logic.",
  },
  {
    title: "Clean Code",
    desc: "Readable, scalable, and maintainable code practices.",
  },
];

function About() {
  return (
    <section className="About  bg-ink text-white flex items-center">
      <div className="max-w-screen-2xl mx-auto px-6 py-16">

        <h1 className="flex flex-col items-center mb-12 mt-5 text-6xl font-extrabold">
          About
        </h1>

        {/* Sparkle Divider */}
        <h1 className="flex justify-center gap-2 py-6">
          <Sparkle size={16} className="text-gray-400 opacity-70" />
          <Sparkle size={16} className="text-gray-400 opacity-70" />
          <Sparkle size={16} className="text-gray-400 opacity-70" />
        </h1>

        {/* About Text */}
        <p className="text-center leading-relaxed max-w-3xl mx-auto mb-12">
          I’m a full-stack web developer with a strong passion for building
          digital solutions that are fast, accessible, and user-friendly. I
          started my journey in web development by exploring modern JavaScript
          frameworks and have since worked on various projects—from landing
          pages to full e-commerce systems.
          <br />
          <br />
          <span className="text-teal-300 font-semibold">
            Core Skills: JavaScript, React, Node.js, Express, MongoDB,
            PostgreSQL, Docker, Git, REST API.
          </span>
        </p>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">My Core Values</h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreValues.map((item, i) => (
              <div
                key={i}
                className="border bg-white text-black rounded-xl overflow-hidden hover:shadow-lg hover:shadow-teal-900 transition shadow-sm"
              >
                <div className="flex h-48 flex-col justify-between p-6">
                  {/* Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-12 w-12 fill-current opacity-80"
                  >
                    <path d="M11.572 0c-.176... (SVG dipersingkat)"></path>
                  </svg>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
