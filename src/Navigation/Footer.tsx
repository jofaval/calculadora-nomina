import React from "react";
import linksConstants from "../constants/links.constants";

const Footer: React.FC = () => (
  <footer className="footer__container">
    <div className="footer my-4">
      <p className="footer__title text-center text-white">
        Échale un vistazo a mis otros proyectos/repositorios{" "}
        <a href={linksConstants.GITHUB} className="text-bold">
          @github/jofaval
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
