import { useState } from "react";

type CheckboxProps = {
  id?: string;
  initiallyChecked?: boolean;
  label?: JSX.Element | JSX.Element[] | string;
  name?: string;
  onChange?: (status: boolean) => void;
};

export function Checkbox({
  initiallyChecked = false,
  onChange,
  name = "checkbox",
  id = "",
  label = "",
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initiallyChecked);
  const fallbackId = id || name;

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked;
    setIsChecked(status);

    if (onChange) {
      onChange(status);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <label
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={fallbackId}
      >
        {label}
      </label>
      &nbsp;
      <input
        checked={isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        id={fallbackId}
        name={name}
        onChange={onChangeHandle}
        type="checkbox"
      />
    </div>
  );
}
