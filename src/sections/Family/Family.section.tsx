import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Payroll } from "Payroll";
import { toggleDisclosureClass } from "sections/utils/css-class.utils";

export function Family() {
  return (
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
  );
}
