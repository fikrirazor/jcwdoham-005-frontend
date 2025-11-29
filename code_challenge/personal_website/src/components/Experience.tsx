function Experience() {
  const workHistory = [
    {
      title: "Full-Stack Developer",
      company: "PT Tech Innovate",
      timeline: "2023 – Present",
      responsibilities: [
        "Developed full-stack applications using React, Node.js, and Express.",
        "Built and optimized REST APIs for high-traffic systems.",
        "Managed MongoDB & PostgreSQL databases.",
        "Collaborated with UI/UX teams to deliver responsive interfaces.",
        "Implemented CI/CD pipelines & conducted code reviews.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      timeline: "2021 – 2023",
      responsibilities: [
        "Built landing pages, company profiles, and frontend apps for clients.",
        "Integrated APIs and improved UI/UX performance.",
        "Converted Figma designs into responsive React interfaces.",
        "Optimized performance scores (Lighthouse, SEO, Accessibility).",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Creative Digital Studio",
      timeline: "2020 – 2021",
      responsibilities: [
        "Assisted in developing web apps using JS, HTML, and CSS.",
        "Maintained existing websites and improved UI issues.",
        "Created reusable components and admin dashboards.",
        "Documented features and contributed to testing workflows.",
      ],
    },
  ];

  return (
    <section className="Experience  text-center h-screen flex flex-col justify-center items-center text-white bg-black">
      <div className="relative w-9/12">
        
        <div className="absolute -left-3 -top-3 bg-black border-2 border-white w-full h-full"></div>

       
        <div className="relative bg-white border-2 border-white p-6 text-black space-y-6">
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
    </section>
  );
}

export default Experience;
