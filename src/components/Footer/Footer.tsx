import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer-text inria-sans-light">
        {" "}
        Nicolas Peralta &copy; 2025
      </p>
      <ul className="links-social-media">
        <li>
          <a
            href="https://linkedin.com/in/nicolas-peralta-paez"
            target="_blank"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/nicodigos" target="_blank">
            <FaGithub className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:nperaltapz@gmail.com">
            <CiMail className="footer-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
