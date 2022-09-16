import React from "react";
import linksConstants from "../constants/links.constants";

const Footer: React.FC = () => (
  <footer className="footer__container">
    <div className="footer">
      <p className="footer__title text-center">
        Checkout my other repositories at{" "}
        <a href={linksConstants.GITHUB}>@github/jofaval</a>
      </p>
    </div>
  </footer>
);

export default Footer;
