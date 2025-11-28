function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Contact bg-black text-white py-16">
      <h1 className="text-center text-6xl font-bold">Contact</h1>
      <p className="text-center mt-4 text-gray-300">
        I'm currently available for work
      </p>

      <div className="mt-12 max-w-4xl mx-auto px-4">
        <div
          className="max-w-2xs mx-auto px-4 py-2 rounded-tl-lg  rounded-br-lg border-1 border border-white"
        >
          <h3 className="text-center text-xl   ">Send Me A Message</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {/* Name */}
          <div className="relative md:col-span-1">
            <input
              type="text"
              id="name"
              name="name"
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-all focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-5 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative md:col-span-2 col-span-1">
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-all focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-5 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative md:col-span-3 col-span-1">
            <textarea
              id="message"
              name="message"
              className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-all focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 -top-5 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Message
            </label>
          </div>
        </form>

        <button className="mt-10 mx-auto flex rounded bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 transition">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
