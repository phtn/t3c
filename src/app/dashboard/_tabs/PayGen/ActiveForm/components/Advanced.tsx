import { type Control } from "react-hook-form";
import { type FieldItemProps } from "../types";
import { type PaymentSchema } from "@resource/payments";
import { type CheckoutInput } from "../../fields";
import { FieldItem } from "./FieldItem";
import { FormField } from "@@components/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@@components/accordion";
import { CardContent } from "@@components/card";

type AdvancedProps = {
  control: Control<PaymentSchema>;
  fields: CheckoutInput[];
  loading: boolean;
};

const render = (props: FieldItemProps) => <FieldItem {...props} />;

export const Advanced = ({ control, fields, loading }: AdvancedProps) => (
  <Accordion className="mb-3 mt-8" type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="border-b-[0.33px] border-indigo-300 font-bold text-indigo-500 dark:border-slate-600 dark:text-indigo-100">
        Advanced
      </AccordionTrigger>
      <AccordionContent className="rounded bg-transparent pt-5">
        <CardContent className="grid grid-cols-2 gap-x-2 gap-y-8 px-1 md:gap-x-10">
          {fields.map((item) => (
            <FormField
              disabled={loading}
              key={item.name}
              control={control}
              name={item.name}
              render={({ field }) => render({ field, item })}
            />
          ))}
        </CardContent>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
