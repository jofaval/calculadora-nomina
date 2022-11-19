/** Components */
import { Footer, Header } from "Navigation";

export const MainLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => (
  <div className="app__container bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500 w-full">
    <div
      className="app px-3 container mx-auto min-h-screen flex flex-col justify-between align-items-center gap-4"
      id="app"
    >
      <nav className="app__header">
        <Header />
      </nav>

      <main className="app__main rounded-2xl bg-white p-2 justify-self-stretch">
        {children}
      </main>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  </div>
);
