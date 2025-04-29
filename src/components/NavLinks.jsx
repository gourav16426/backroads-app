import { menuItems } from "../data";

const Menu = ({ link, name }) => {
  return (
    <li>
      <a href={link} className="nav-link">
        {name}
      </a>
    </li>
  );
};

const NavLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {menuItems.map((item) => {
        return <Menu {...item} />;
      })}
    </ul>
  );
};

export default NavLinks;
