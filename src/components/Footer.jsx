import { menuItems, socialItems } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {menuItems.map((item) => (
          <li>
            <a href={item.link} class="footer-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ul class="footer-icons">
        {socialItems.map((item) => (
          <li>
            <a href={item.link} target="_blank" class="footer-icon">
              <i class={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
      <p class="copyright">devloped by Gourav kumar-2300320120096</p>
    </footer>
  );
};
export default Footer;
