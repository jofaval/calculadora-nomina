import React from "react";
import linksConstants from "../constants/links.constants";

const Footer: React.FC = () => (
  <footer className="footer__container bg-gradient-to-tl from-purple-600 to-cyan-400 absolute bottom-0 left-0 p-3 mt-5 rounded-t-lg w-full">
    <div className="footer my-4">
      <p className="footer__title text-center text-white">
        Échale un vistazo a mis otros proyectos/repositorios{" "}
        <a href={linksConstants.GITHUB} className="font-bold hover:underline">
          @github/jofaval
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
