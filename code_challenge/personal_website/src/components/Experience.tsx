function Experience() {
  const workHistory = [
    {
      title: "Self Employed",
      company: "JAMAIR GAMES",
      timeline: "Jan 2021-Feb 2023",
      responsibilities: [
        "Creating a Game Development Document for game requirement purpose.",
        "Implementing the document using the Godot Engine and GDScript.",
        "Formulating a scoring system and virtual time system for the game.",
        "Releasing the game to the Google Play Store.",
      ],
    },
    {
      title: "Computer & Network Engineer",
      company: "PT POS INDONESIA",
      timeline: "Mar 2014-Jun 2014",
      responsibilities: [
        "Repairing and Monitoring network cable and server at office.",
        "Repairing personal computer and computer server with order.",
      ],
    },
  ];

  return (
    <section className="Experience text-center  bg-ink">
      <div className=" max-w-screen-2xl mx-auto px-20 pt-12 justify-center items-center text-cream-light">
        <div className="flex">
          <div className="w-1/3 flex flex-col justify-center">
            <h1 className="text-6xl font-extrabold">Experience</h1>
          </div>
          <div className="w-2/3">
            <div className="relative my-20 hover:-left-1 hover:-top-1 ">
              <div className="absolute -left-3 -top-3 bg-ink border-2 border-cream-light w-full h-full"></div>

              <div className="relative bg-cream-light border-2 border-cream-light p-6 text-ink space-y-6">
                <h2 className="text-2xl font-bold mb-4">Work History</h2>

                {workHistory.map((job, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-xl font-semibold">
                      {job.title} — {job.company}
                    </h3>
                    <p className="text-sm italic">{job.timeline}</p>

                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {job.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
