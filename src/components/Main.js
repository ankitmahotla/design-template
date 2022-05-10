const Main = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
            fugit?
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nisi
            vero natus perspiciatis similique quas sapiente quidem quibusdam
            magni, quaerat dignissimos. Magni voluptatibus, adipisci illum harum
            veniam dolor perferendis ea.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Discover
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91dGlxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
