import heroBackground from "../assets/astronomy-1868560_1920.jpg";
import photoProfile from "../assets/PhotoProfile.jpg";
import { Mouse } from "lucide-react"
function Hero() {
  return (
    <section
      className="Hero h-screen"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-left h-screen flex flex-col justify-center items-center bg-black/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-full max-w-screen-2xl mx-auto">
          {/* Main Content */}
          <div className="container mx-auto flex px-5 py-12 items-center md:items-start justify-center md:justify-start flex-col text-center md:text-left">
            <h1 className="font-jakarta text-4xl sm:text-5xl md:text-6xl mb-0 text-white tracking-tight leading-tight font-light">
              Hello
              <br /> There... <br />
              <span className="text-zinc-100"> Fikri rozan </span>
              <br />
              Here!
            </h1>
            <h2 className="font-jakarta mt-2 leading-normal md:leading-relaxed text-white tracking-tight text-lg md:text-xl">
              Software Engineer.
            </h2>
            <p className="font-jakarta mt-3 mb-8 md:mb-16 leading-normal md:leading-relaxed text-white tracking-tight text-lg md:text-xl">
              Crafting web experiences That users love & scale with growth.
            </p>
          </div>

          {/* Image */}
          <div className="container mx-auto flex px-5 py-6 md:py-12 items-center justify-center flex-col">
            <img
              className="Photo-Profile rounded-full object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-white shadow-2xl shadow-sky-950/70"
              src={photoProfile}
              alt="Profile"
            />
          </div>
        </div>
        <div className="w-full max-w-screen-2xl mx-auto lg:pt-80 md:pb-20 px-4 md:px-8 ">
          
          <div className="grid grid-cols-3 gap-4">
            
            <div className="p-2 text-left text-white ">
              Get a Project
            </div>

            <div className="p-2 text-center text-white">
              s
            </div>

            
            <div className="text-right text-white">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
