import Section from "../Components/Section";

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto hidden">
      <div className="flex flex-row justify-end gap-6 mt-4">
        <h2>
          <a href="#about">About</a>
        </h2>
        <h2>
          <a href="#experience">Experience</a>
        </h2>
        <h2>
          <a href="#portfolio">Portfolio</a>
        </h2>
      </div>
    </div>
  );
};
export default Navbar;
