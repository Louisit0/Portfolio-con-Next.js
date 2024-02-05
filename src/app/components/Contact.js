const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col py-28 max-w-screen-lg mx-auto px-6 md:px-20 xl:px-0"
    >
      <div className="flex flex-row  items-center mb-8 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <h3 className="text-4xl text-stone-800 font-bold tracking-tight ">
          Contacto
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex flex-row items-center gap-4">
          <div>
            <h3 className="font-medium text-lg text-blue-500">Ubicación</h3>
            <p className="text-zinc-500">Buenos Aires, Argentina 📍</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div>
            <h3 className="font-medium text-lg text-blue-500">Mail</h3>
            <p className="text-zinc-500">Lrangarita7@gmail.com 📧</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
