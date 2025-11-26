import Hero from "../components/Hero";

function Home() {
  return (
    <main className="   ">
      <nav className="lg:fixed lg:right-8 lg:top-0 lg:h-full lg:w-64 sticky top-0 p-1 relative nav-dashed-border shadow-[4px_0_6px_rgba(251,191,36,0.3)] animate-float z-50">  
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-end lg:flex-col lg:items-end p-4 pr-8 text-white">
          <ul className="flex flex-col lg:flex-col space-y-4 lg:space-y-6 w-full lg:w-auto">
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                Home
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                About
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                Projects
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300 block">
                Contact
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300 block">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
      <section className="About text-center h-screen flex flex-col justify-center items-center text-white bg-black">
        <p>
          {" "}
          I am a web developer with a strong interest in building clean,
          efficient, and user-focused digital experiences. I started learning
          web development out of curiosity, and over time it grew into a passion
          that shaped my career. I have experience working on small to mid-scale
          projects, including landing pages, dashboards, and API-driven
          applications.
        </p>
        <div className="skills  text-center h-screen flex flex-col justify-center items-center text-white bg-black">
          <div>python</div>
          <div>javascript</div>
          <div>Typescript</div>
          <div>Git</div>
          <div>React</div>
        </div>
      </section>
      <section className="Portfolio  text-center h-screen flex flex-col justify-center items-center text-white bg-black">
        <h1>Portfolio</h1>
        <div className="projects "></div>
      </section>
      <section className="Experience  text-center h-screen flex flex-col justify-center items-center text-white bg-black">
        <h1>Experience</h1>
      </section>
      <section className="Testimonial  text-center h-screen flex flex-col justify-center items-center text-white bg-black">
        <p>
          "James is a great developer. He is very quick to learn new things and
          is always willing to help others. He is a great team player and is
          always available to help others."
        </p>
      </section>
    </main>
  );
}
export default Home;
