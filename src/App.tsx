import React from "react";
import { Footer, Header } from "./Navigation/";
import { Payroll } from "./Payroll";

const App: React.FC = () => (
  <div className="app__container bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500 w-full h-full">
    <div className="app p-3 container mx-auto" id="app">
      <nav className="app__header">
        <Header />
      </nav>

      <main className="app__main">
        <Payroll />
      </main>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
