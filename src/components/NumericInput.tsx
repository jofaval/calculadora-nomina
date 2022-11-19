import { joinClasses } from "utils/css.utils";
import { Input, InputProps } from "./Input";

type NumericInputProps = Omit<InputProps<number>, "type">;

export const NumericInput: React.FC<NumericInputProps> = ({
  max = Infinity,
  min = -Infinity,
  className = "",
  step = 1,
}) => (
  <Input
    type={"number" as string}
    {...{
      max: max.toString(),
      min: min.toString(),
      className: joinClasses("shadow", className),
      step: step.toString(),
    }}
  />
);
