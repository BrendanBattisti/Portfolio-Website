const Hero = () => {
  return (
    <div className="h-screen w-3/4 mx-auto">
      <div className="mx-auto w-1/2 h-full flex flex-col justify-center text-center">
        <div>
          <h1>Hi, I'm Brendan</h1>
          <p className="mt-6 w-3/4 mx-auto">
            I'm a software engineer and website designer passionate about using
            technology to build <b>intuitive, productive</b> solutions that
            transform how businesses operate.
          </p>
          <div className="flex flex-row justify-evenly mt-8">
            <button>About</button>
            <button>Portfolio</button>
            <button>Experience</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
