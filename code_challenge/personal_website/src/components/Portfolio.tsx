function Portfolio() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Card */}
        <div className="bg-white text-black p-8 border border-black rounded-lg relative">

          {/* Black accent line (left side) */}
          <div className="absolute left-0 top-0 h-full w-2 bg-black rounded-l-lg"></div>

          <h2 className="text-2xl font-bold mb-6 pl-4">
            Project 3 — Personal Portfolio Website
          </h2>

          <p className="font-semibold text-gray-800 mb-4 pl-4">
            Tech: React + Vite, Tailwind CSS
          </p>

          <div className="space-y-4 pl-4 text-gray-900">

            <div>
              <h3 className="font-bold">Situation</h3>
              <p>
                Needed a modern personal website to showcase my work and experience.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Task</h3>
              <p>
                Design and build a clean, minimalist, high-performance portfolio website.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Action</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Designed layout in Figma</li>
                <li>Built with React + Vite for fast performance</li>
                <li>Implemented responsive UI using Tailwind CSS</li>
                <li>Optimized SEO and accessibility (Lighthouse score 90+)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Result</h3>
              <p>
                Increased recruiter engagement and improved online professional presence.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
