const Project = (data) => {
  // Get project icon based on name or use default
  const getProjectIcon = (name) => {
    const icons = {
      "Fusion Upgrade": "📱",
      "Andrew Kemler": "🛡️",
      "Carmichael's Elite Mobile Detailing": "🚗",
    };
    return icons[name] || "🚀";
  };

  return (
    <div className="group relative bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Project icon/emoji */}
        <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-all duration-300">
          <span className="text-2xl">{getProjectIcon(data.name)}</span>
        </div>

        {/* Project title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-300 transition-colors duration-300">
          <a
            href={`https://${data.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-300 transition-colors duration-200"
          >
            {data.name}
          </a>
        </h3>

        {/* Project description */}
        <p className="text-subtext text-sm mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded-md text-xs text-primary-300"
            >
              {tech}
            </span>
          )) ||
            ["React", "TypeScript", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded-md text-xs text-primary-300"
              >
                {tech}
              </span>
            ))}
        </div>

        {/* Visit link */}
        <div className="flex items-center justify-between">
          <a
            href={`https://${data.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-200"
          >
            <span>Visit Project</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
