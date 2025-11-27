import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="  font-jakarta ">
      <nav className="lg:fixed lg:right-8 lg:top-0 lg:h-full lg:w-64 sticky top-0 p-1 relative nav-dashed-border shadow-[4px_0_6px_rgba(251,191,36,0.3)] animate-float z-50">  
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end lg:flex-col lg:items-end p-4 pr-8 text-white">
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
      <About />
      <Skills  />
      <Portfolio />
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
      <Contact />
    </main>
  );
}
export default Home;
