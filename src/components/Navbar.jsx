import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavLinks />
        <SocialIcons/>
      </div>
    </nav>
  );
};
export default Navbar;
