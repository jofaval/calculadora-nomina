/** Vendors */
import React from "react";
/** Components */
import { Footer, Header } from "./Navigation/";
/** Sections */
import { Disability } from "sections/Disability/Disability.section";
import { Family } from "sections/Family/Family.section";
import { InCharge } from "sections/InCharge/InCharge.section";
import { Overall } from "sections/Overall/Overall.section";

const App: React.FC = () => (
  <div className="app__container bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500 w-full">
    <div
      className="app px-3 container mx-auto min-h-screen flex flex-col justify-between align-items-center gap-4"
      id="app"
    >
      <nav className="app__header">
        <Header />
      </nav>

      <main className="app__main rounded-2xl bg-white p-2 justify-self-stretch">
        <Overall />
        <Family />
        <Disability />
        <InCharge />
      </main>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
