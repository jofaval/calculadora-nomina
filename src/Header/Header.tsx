import React from "react";
import "./Header.module.scss";

const Header: React.FC = () => (
  <header className="header__container">
    <div className="header">
      <h1 className="header__title text-3xl font-bold underline">
        Calculadora de nóminas
      </h1>
    </div>
  </header>
);

export default Header;
