/** Vendors */
import React from "react";
/** Sections */
import { Overall, Family, Disability, InCharge } from "sections";
/** Layouts */
import { MainLayout } from "MainLayout";

const App: React.FC = () => (
  <MainLayout>
    <Overall />
    <Family />
    <Disability />
    <InCharge />
  </MainLayout>
);

export default App;
