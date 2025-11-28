function Experience() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 relative">
        
        {/* shadow box belakang */}
        <div className="absolute bottom-4 left-3 w-full h-full border-2 border-white opacity-40"></div>

        {/* box utama */}
        <div className="relative bg-white text-black p-8 border-2 border-white shadow-lg">
          
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

          {/* Experience 1 */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold">Full-Stack Developer — Freelance</h3>
            <p className="text-gray-700 mb-3">2021 – Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>Build web applications for SMEs and startups</li>
              <li>Develop both front-end and back-end features</li>
              <li>Optimize performance and improve UI/UX</li>
              <li>Integrate APIs, databases, and cloud services</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div>
            <h3 className="text-xl font-semibold">Front-End Developer Intern — TechLabs Indonesia</h3>
            <p className="text-gray-700 mb-3">2020 – 2021</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>Built landing pages and dashboards</li>
              <li>Implemented pixel-perfect UI from Figma</li>
              <li>Assisted in testing and debugging apps</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
