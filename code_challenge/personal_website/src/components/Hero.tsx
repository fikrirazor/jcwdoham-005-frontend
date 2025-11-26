import heroBackground from "../assets/astronomy-1868560_1920.jpg";
function Hero() {
  return (
    <section
      className="Hero h-screen "
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-left h-screen flex flex-col justify-center items-center bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto flex px-5 py-12 items-start justify-start flex-col">
          <h1 className="font-jakarta md:text-6xl text-3xl mb-0 font-bold text-white tracking-tight leading-tight font-light">
            Hello
            <br /> There... <br />
            <span className="text-zinc-100"> Fikri rozan </span>
            <br />
            Here!
          </h1>
          <h2 className="font-jakarta mt-2  md:leading-relaxed leading-normal text-white tracking-tight text-xl">
            Software Engineer.
          </h2>
          <p className="font-jakarta mt-3 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
            Building scalable and high-performance web solutions for your
            business needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
