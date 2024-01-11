import type { HTMLInputTypeAttribute } from "react";
import type { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import type { CheckoutName, CheckoutInput } from "../fields";
import type { CheckoutSchema } from "../schema";

export type FormProps = {
  form: UseFormReturn<CheckoutSchema>;
  loading: boolean;
  onSubmit: (values: CheckoutSchema) => void;
};
export type InputFieldProps = {
  label: string;
  placeholder: string;
  field: ControllerRenderProps<CheckoutSchema>;
  type: HTMLInputTypeAttribute;
  name: CheckoutName;
  alt: string;
};

export type FieldItemProps = {
  field: ControllerRenderProps<CheckoutSchema>;
  item: CheckoutInput;
};
