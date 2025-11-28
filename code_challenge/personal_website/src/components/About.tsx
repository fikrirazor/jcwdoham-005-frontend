function About() {
  return (
    <section className="About text-white bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="absolute -left-20 top-1/2 -translate-y-1/2 text-5xl leading-none font-serif">
          About
        </h2>
        <div className="relative mx-auto max-w-4xl aspect-square bg-black p-8 border-2 border-white shadow-lg">
          <p className="text-gray-200 leading-relaxed">
            I’m a full-stack web developer with a strong passion for building
            digital solutions that are fast, accessible, and user-friendly. I
            started my journey in web development by exploring modern JavaScript
            frameworks and have since worked on various projects—from landing
            pages to full e-commerce systems.
            <br />
            <br />
            <strong>Core Skills:</strong> JavaScript, React, Node.js, Express,
            MongoDB, PostgreSQL, Docker, Git, REST API
          </p>

          {/* Core Values */}
          <div className="key-values text-center flex flex-col justify-center items-center text-white py-8">
            <h2 className="text-2xl font-bold mb-4">My Core Values</h2>
            <ul className="list-none space-y-2 max-w-md">
              <li>
                <strong>Timeliness:</strong> Deliver clean and complete work on
                schedule.
              </li>
              <li>
                <strong>Attention to Detail:</strong> Code that is structured
                and maintainable.
              </li>
              <li>
                <strong>Clear Communication:</strong> Consistent, transparent
                collaboration.
              </li>
              <li>
                <strong>Problem-Solving:</strong> Building effective technical
                solutions.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-[2px] w-16 bg-white"></div>

          <span className="text-lg font-semibold tracking-widest">ABOUT</span>
        </div>
      </div>
      <section className="bg-black text-white py-24">
        <div className="relative max-w-4xl mx-auto">
          {/* Main Box */}
          <div className="border border-white p-2">
            <img src="/your-image.jpg" className="w-full h-auto object-cover" />
          </div>

          {/* Caption */}
          <p className="mt-3 text-gray-300">
            <span className="text-gray-400">#17</span> “Precious Things”
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
