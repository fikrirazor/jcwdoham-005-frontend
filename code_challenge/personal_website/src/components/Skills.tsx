function Skills() {
  const skills = [
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section className="h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-3 p-6  bg-black backdrop-blur-sm border border-white hover:bg-gradient-to-br hover:from-indigo-600/20 hover:to-cyan-500/10 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center ">
                <img src={icon} alt={name} className="w-20 h-20" />
              </div>

              <span className="text-sm font-medium text-gray-200">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
