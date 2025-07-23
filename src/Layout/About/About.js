import Section from "../Components/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary-400 font-medium text-lg mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who am I?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              I'm a passionate software engineer driven by the desire to solve
              real-world problems through elegant code and user-centered design.
              With a strong foundation in computer science and hands-on
              experience in modern web technologies, I focus on creating
              solutions that are not only functional but also intuitive and
              scalable.
            </p>

            <p className="text-lg leading-relaxed">
              Whether it's optimizing internal tools, crafting engaging
              websites, or building robust applications, I prioritize clarity,
              performance, and maintainability in everything I create. My
              approach combines technical expertise with creative
              problem-solving to deliver exceptional user experiences.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-300">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Python",
                  "SQL",
                  "Git",
                  "Ruby on Rails",
                  "Java",
                  "C++",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-300 hover:bg-primary-500/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="relative animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-2xl blur-xl"></div>

              {/* Main card */}
              <div className="relative bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-subtext">Currently working at</span>
                  </div>
                  <h4 className="text-xl font-semibold text-primary-300">
                    Xerox
                  </h4>
                  <p className="text-subtext">Associate Software Engineer</p>

                  <div className="pt-4 border-t border-primary-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-subtext">Education</span>
                    </div>
                    <h4 className="text-xl font-semibold text-primary-300 mt-2">
                      RIT
                    </h4>
                    <p className="text-subtext">B.S. Computer Science</p>
                    <p className="text-sm text-subtext">GPA: 3.57</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
