import React from "react";
import Header from "./Header/Header";

const App: React.FC = () => (
  <div className="app p-3" id="app">
    <nav className="app__header">
      <Header />
    </nav>
  </div>
);

export default App;
