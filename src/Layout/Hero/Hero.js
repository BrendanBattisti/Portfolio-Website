const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-primary-400/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-4 animate-slide-up">
            <p className="text-primary-400 font-medium text-lg md:text-xl tracking-wide">
              Hello, I'm
            </p>
            <h1 className="bg-gradient-to-r from-text via-primary-300 to-accent bg-clip-text text-transparent">
              Brendan Battisti
            </h1>
            <div className="flex items-center justify-center space-x-2 text-subtext">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-lg md:text-xl font-medium">
                Software Engineer
              </span>
              <div
                className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          {/* Description */}
          <div
            className="max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              I'm passionate about building{" "}
              <span className="text-primary-300 font-semibold">
                intuitive, productive
              </span>{" "}
              solutions that transform how businesses operate. Specializing in
              modern web technologies and user-centered design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Learn More
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
