import { type HTMLInputTypeAttribute } from "react";
import { type IconName } from "@@components/input";
import { type UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const verifySchema = z.object({
  clientId: z.string(),
  clientName: z.string(),
});

export type VerifySchema = z.infer<typeof verifySchema>;

export const verifyDefaults: VerifySchema = {
  clientId: "111",
  clientName: "",
};

export type VerifyName = "clientId" | "clientName";

type VerifyType = UseFormReturn<VerifySchema>;

export type VerifyFormProps = {
  form: VerifyType;
  loading: boolean;
  onSubmit: (values: VerifySchema) => void;
};

export interface VerifyField {
  name: VerifyName;
  label: string;
  placeholder: string;
  inputType: "input" | "select";
  type: HTMLInputTypeAttribute;
  alt: IconName;
}

export const verifyFields: VerifyField[] = [
  {
    name: "clientId",
    label: "Client Id",
    placeholder: "Client Id",
    inputType: "input",
    type: "text",
    alt: "name",
  },
  {
    name: "clientName",
    label: "Client Id",
    placeholder: "Client Id",
    inputType: "input",
    type: "text",
    alt: "name",
  },
];
