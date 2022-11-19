/** Vendors */
import { ChangeEvent, Fragment, useState } from "react";
/** Components */
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type Option = {
  value: string;
  name: string;
};

type FilterValuesProps = {
  options: Option[];
  query: string;
};

const prepare = (value: string) => value.toLowerCase().replace(/\s+/g, "");

const filterValues = ({ query, options }: FilterValuesProps): Option[] => {
  if (query === "") {
    return options;
  }

  return options.filter((option) => {
    return prepare(option.value).includes(prepare(query));
  });
};

type SelectProps = {
  options: Option[];
  label: string;
};

const NoResultsPlaceholder = (
  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
    Sin resultados
  </div>
);

const renderOption = (option: Option) => (
  <Combobox.Option
    key={option.value}
    className={({ active }) =>
      `relative cursor-default select-none py-2 pl-10 pr-4 ${
        active ? "bg-teal-600 text-white" : "text-gray-900"
      }`
    }
    value={option}
  >
    {({ selected, active }) => (
      <>
        <span
          className={`block truncate ${
            selected ? "font-medium" : "font-normal"
          }`}
        >
          {option.name}
        </span>

        {!selected ? null : (
          <span
            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
              active ? "text-white" : "text-teal-600"
            }`}
          >
            <CheckIcon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
      </>
    )}
  </Combobox.Option>
);

export const Select: React.FC<SelectProps> = ({ options, label }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [query, setQuery] = useState("");

  const onQueryValueChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);
  const cleanQueryValue = () => setQuery("");
  const displayValue = (option: Option) => option.name;

  const filteredValues = filterValues({ query, options });
  const noQueryResultsFound = filteredValues.length === 0 && query !== "";

  return (
    <Combobox value={selectedValue} onChange={setSelectedValue}>
      <div className="relative mt-1">
        <p className="px-3 pt-2 font-bold">{label}</p>

        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            displayValue={displayValue}
            onChange={onQueryValueChange}
          />

          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={cleanQueryValue}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {noQueryResultsFound
              ? NoResultsPlaceholder
              : filteredValues.map(renderOption)}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
