const Section = ({ id, children }) => {
  return (
    <div id={id} className="w-1/2 mx-auto">
      {children}
    </div>
  );
};
export default Section;
