import React from "react";
import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";

const App: React.FC = () => (
  <div className="app p-3 container mx-auto" id="app">
    <nav className="app__header">
      <Header />
    </nav>
    <main></main>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

export default App;
