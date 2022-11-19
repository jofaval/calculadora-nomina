/** Vendors */
import { Disclosure } from "@headlessui/react";
/** Icons */
import { ChevronRightIcon } from "@heroicons/react/20/solid";
/** Components */
import { Checkbox } from "components/Checkbox";
import { NumericInput } from "components/NumericInput";
import { Select } from "components/Select";
/** Utils */
import { toggleDisclosureClass } from "sections/utils/css-class.utils";

export function Overall() {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            Datos generales
            <ChevronRightIcon className={toggleDisclosureClass(open)} />
          </Disclosure.Button>

          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
            <NumericInput
              label={"Salario bruto/año"}
              name="yearly-raw-salary"
            />
            <NumericInput label={"Edad"} name="age" />
            <Checkbox
              label={"Movilidad geográfica"}
              name={"geographic-mobility"}
            />
            <Checkbox
              label={"¿Prorrateado? (sí=12, no=14)"}
              name={"apportionment"}
            />
            <Select
              label="Situación familiar"
              options={[
                {
                  name: "Soltero, viudo, divorciado o separado con hijos a cargo",
                  value: "1",
                },
                {
                  name: "Casado y cuyo cónyuge no obtiene rentas superiores a 1.500 euros anuales",
                  value: "2",
                },
                {
                  name: "Otros. Soltero sin hijos, casado con o sin hijos y con cónyuge con rentas superiores a 1.500 euros al año",
                  value: "3",
                },
              ]}
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
