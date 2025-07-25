import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const Sections = ["About", "Portfolio", "Experience", "Contact"];

  function NavBarLink(text) {
    return (
      <button
        onClick={() => scrollToSection(text.toLowerCase())}
        className="text-subtext hover:text-primary-300 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary-500/10"
      >
        {text}
      </button>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-primary-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent hover:from-primary-300 hover:to-accent/80 transition-all duration-300 transform hover:scale-105"
            >
              Brendan Battisti
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {Sections.map((text) => NavBarLink(text))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-subtext hover:text-primary-300 p-2 rounded-lg transition-all duration-200 hover:bg-primary-500/10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface/95 backdrop-blur-md rounded-lg mt-2 border border-primary-500/20">
              <button
                onClick={() => scrollToSection("about")}
                className="text-subtext hover:text-primary-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-primary-500/10"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-subtext hover:text-primary-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-primary-500/10"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-subtext hover:text-primary-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-primary-500/10"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-400 hover:text-primary-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-primary-500/10"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
