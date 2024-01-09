import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@@components/form";
import { Input } from "@@components/input";
import { InputFieldProps } from "../types";

const InputField = (props: InputFieldProps) => {
  const { label, placeholder, type, field, alt } = props;
  return (
    <FormItem>
      <FormLabel className="text-foreground flex items-center text-xs">
        {label}
      </FormLabel>
      <FormControl>
        <Input {...field} alt={alt} placeholder={placeholder} type={type} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
export default InputField;
