const Section = ({ id, children }) => {
  return (
    <div id={id} className="w-3/5 mx-auto h-screen">
      {children}
    </div>
  );
};
export default Section;
