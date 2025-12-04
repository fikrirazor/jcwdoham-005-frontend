import heroBackground from "../assets/astronomy-1868560_1920.jpg";
import photoProfile from "../assets/PhotoProfile.jpg";
import { Mouse } from "lucide-react";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { Link } from "react-router";
import { Particles } from "@/components/ui/shadcn-io/particles";

function Hero() {
  return (
    <section
      className="Hero h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative text-left h-screen flex flex-col justify-center items-center bg-ink/70 backdrop-blur-sm ">
        {/* Konten Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-full max-w-screen-2xl mx-auto px-5 md:px-0">
          {/* Main Content */}
          <div className="flex px-0 md:px-5 py-12 items-center md:items-start justify-center md:justify-start flex-col text-center md:text-left">
            <h1 className="font-jakarta text-4xl sm:text-5xl md:text-6xl mb-0 text-cream-light tracking-tight leading-tight font-light">
              Hello
              <br /> There... <br />
              <span> Fikri rozan </span>
              <br />
              Here!
            </h1>

            {/* Typing Text */}
            <TypingText
              text={["Software Engineer", "Full Stack Web Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="font-jakarta mt-2 leading-normal md:leading-relaxed tracking-tight text-lg md:text-xl"
              textColors={["#b0a9e4", "#dea38b", "#d9c8bf"]}
              variableSpeed={{ min: 50, max: 120 }}
            />

            <p className="font-jakarta mt-3 mb-8 md:mb-16 leading-normal md:leading-relaxed text-cream-light tracking-tight text-lg md:text-xl">
              Crafting web experiences That users love & scale with growth.
            </p>
          </div>

          {/* Image */}
          <div className="flex px-0 md:px-5 py-6 md:py-12 items-center justify-center flex-col">
            <img
              className="Photo-Profile rounded-full object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-cream-light shadow-2xl shadow-sky-950/70"
              src={photoProfile}
              alt="Profile"
            />
          </div>
        </div>
        {/* Konten tombol dan scroll */}
        <div className="absolute bottom-0 left-0 right-0 w-full max-w-screen-2xl mx-auto px-5 md:px-0">
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-left text-cream-light">
              <Link to="#Portfolio" className="hover:underline">
                <TypingText
                  text={["Get a Project", "Get a Project"]}
                  typingSpeed={70}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="font-jakarta mt-2 leading-normal md:leading-relaxed tracking-tight text-lg md:text-xl"
                  textColors={["#b0a9e4", "#dea38b", "#d9c8bf"]}
                  variableSpeed={{ min: 50, max: 120 }}
                />
              </Link>
            </div>
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center mb-6 text-cream-light">
              <Mouse className="mb-2 opacity-80" />

              {/* dotted scroll line */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div className="text-right text-cream-light">
              <Link to="#Contact">
                <TypingText
                  text={["Contact", "Contact"]}
                  typingSpeed={70}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="font-jakarta mt-2 leading-normal md:leading-relaxed tracking-tight text-lg md:text-xl"
                  textColors={["#b0a9e4", "#dea38b", "#d9c8bf"]}
                  variableSpeed={{ min: 50, max: 120 }}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Interactive particles */}
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#b0a9e4"
          size={0.8}
        />
      </div>
    </section>
  );
}

export default Hero;
