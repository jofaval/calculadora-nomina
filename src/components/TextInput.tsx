import { Input, InputProps } from "./Input";

type TextInputProps = Omit<InputProps<string>, "type" | "step" | "max" | "min">;

export const TextInput: React.FC<TextInputProps> = ({ ...inputProps }) => (
  <Input type={"text" as string} {...{ ...inputProps }} />
);
