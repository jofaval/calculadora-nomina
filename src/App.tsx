import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Footer, Header } from "./Navigation/";
import { Payroll } from "./Payroll";

const toggleDisclosureClass = (open: boolean): string =>
  `${open ? "rotate-90 transform" : ""} h-5 w-5 text-purple-500`;

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
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Datos generales
                <ChevronRightIcon className={toggleDisclosureClass(open)} />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                <Payroll />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Datos familiares
                <ChevronRightIcon className={toggleDisclosureClass(open)} />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                <Payroll />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Discapacidades
                <ChevronRightIcon className={toggleDisclosureClass(open)} />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                <Payroll />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Datos de personas a cargo
                <ChevronRightIcon className={toggleDisclosureClass(open)} />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                <Payroll />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </main>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
