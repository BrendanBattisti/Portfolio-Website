const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`min-h-screen flex items-center ${className}`}>
      {children}
    </section>
  );
};

export default Section;
