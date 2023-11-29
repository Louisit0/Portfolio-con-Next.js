const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col py-28 max-w-screen-lg mx-auto px-4 lg:px-0"
    >
      <h3 className="text-4xl text-stone-800 font-bold tracking-tight md:text-center lg:text-start mb-8">
        Contact
      </h3>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex flex-row items-center gap-4">
          <div className="rounded-full border p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-stone-800 font-bold text-lg">Location</h3>
            <p className="text-zinc-500">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="rounded-full border p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-stone-800 font-bold text-lg">Mail</h3>
            <p className="text-zinc-500">Lrangarita7@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
