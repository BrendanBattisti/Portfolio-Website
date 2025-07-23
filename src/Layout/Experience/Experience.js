import Section from "../Components/Section";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary-400 font-medium text-lg mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary-300 mb-8">
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-500/30"></div>

              <div className="space-y-8">
                <div className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center border-4 border-background">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface/70 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-primary-300">
                        Associate Software Engineer
                      </h4>
                      <span className="text-subtext text-sm md:text-base">
                        December 2024 - Current
                      </span>
                    </div>
                    <p className="text-primary-400 font-medium mb-4">Xerox</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-2">•</span>
                        <span>
                          Modernized the printer email system by implementing
                          Microsoft OAuth, improving security and user
                          experience.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-2">•</span>
                        <span>
                          Researched and proposed an OAuth-based solution that
                          gave Xerox a scalable, manageable, and competitive
                          email offering.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-2">•</span>
                        <span>
                          Designed and built an in-house authorization library
                          to replace third-party tools—reducing technical debt
                          and increasing security and flexibility.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-2">•</span>
                        <span>
                          Led key feature and system design efforts,
                          coordinating cross-functional teams to deliver robust
                          solutions.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-primary-300 mb-8">
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>

              <div className="space-y-8">
                <div className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-surface/70 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-accent">
                        Bachelor of Science in Computer Science
                      </h4>
                      <span className="text-subtext text-sm md:text-base">
                        December 2024
                      </span>
                    </div>
                    <p className="text-primary-400 font-medium mb-4">
                      Rochester Institute of Technology
                    </p>
                    <div className="space-y-2">
                      <p className="text-subtext">GPA: 3.57</p>
                      <p className="text-subtext">
                        Relevant coursework: Software Engineering, Data
                        Structures & Algorithms, Web Development, Database
                        Systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-subtext mb-6">
            Ready to bring your ideas to life? Let's collaborate on something
            amazing.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
