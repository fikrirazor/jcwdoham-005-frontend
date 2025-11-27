function About() {
  return (
    <section className="About text-center h-screen flex flex-col justify-center items-center text-white bg-black">
      <p>
        {" "}
        I’m a full-stack web developer with a strong passion for building
        digital solutions that are fast, accessible, and user-friendly. I
        started my journey in web development by exploring modern JavaScript
        frameworks and have since worked on various projects—from landing pages
        to full e-commerce systems. Core Skills: JavaScript, React, Node.js,
        Express, MongoDB, PostgreSQL, Docker, Git, REST API
      </p>
      <div className="key-values text-center flex flex-col justify-center items-center text-white bg-black py-8">
        <h2 className="text-2xl font-bold mb-4">My Core Values</h2>
        <ul className="list-none space-y-2 max-w-md">
          <li>
            <strong>Timeliness:</strong> Always deliver clean and complete work
            on schedule.
          </li>
          <li>
            <strong>Attention to Detail:</strong> Code that is structured,
            readable, and maintainable.
          </li>
          <li>
            <strong>Clear Communication:</strong> Transparent collaboration with
            clients and teams.
          </li>
          <li>
            <strong>Problem-Solving:</strong> Efficient solutions for real-world
            technical challenges.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;