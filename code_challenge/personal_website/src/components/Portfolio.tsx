function Portfolio() {
  const workItems = [
    {
      title: "Full-Stack Developer",
      description: "",
      category: "2023 – Present",
      details: ["", ""],
      image: "",
      url: "",
    },
    {
      title: "Full-Stack Developer",
      description: "",
      category: "2023 – Present",
      details: ["", ""],
      image: "",
      url: "",
    },
    {
      title: "Full-Stack Developer",
      description: "",
      category: "2023 – Present",
      details: ["", ""],
      image: "",
      url: "",
    },
  ];

  return (
    <section className="Experience bg-black">
      <div className=" max-w-screen-2xl mx-auto py-32 lg:flex lg:max-h-none lg:items-center">
          <div className="mx-auto max-w-6xl ">
            <h1 className="mb-14 bg-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl text-center">
              Portfolio
            </h1>
            {workItems.map((item, index) => (
            <div key={index} className="relative my-20">
              <div className="absolute -right-3 -top-3 bg-black border-2 border-white w-full h-full"></div>
              <div className="relative border-2 border-white p-6 text-black bg-white grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8 grid-rows-1 mb-20">
                <div className="relative m-2 min-h-80 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="shrink flex-col ml-6 rounded-lg min-h-0 order-2 text-black">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <h3>{item.category}</h3>
                  <p>{item.description}</p>
                  <div>{item.details}</div>
                </div>
              </div>
            </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Portfolio;
