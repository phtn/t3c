import { type FormEvent, useCallback } from "react";
import { CardContent, CardFooter } from "@@components/card";
import { Form, FormField } from "@@components/form";
import { Header } from "@@components/header";
import { paymentDefaults, checkoutInputs } from "../fields";
import type { FieldItemProps, FormProps } from "./types";
import { FieldItem } from "./components/FieldItem";
import { Advanced } from "./components/Advanced";
import { Variant } from "@@components/variant";
import { SubmitAction } from "@@components/submit";

const render = (props: FieldItemProps) => <FieldItem {...props} />;

export const ActiveForm = ({ form, onSubmit, loading }: FormProps) => {
  const { formState, handleSubmit, control, reset } = form;
  const { isValid } = formState;

  const Submit = useCallback(() => {
    return (
      <SubmitAction
        activeLabel="Generate Payment Link"
        inactiveLabel="Generating"
        isValid={isValid}
        loading={loading}
      />
    );
  }, [loading, isValid]);

  const primaryFields = checkoutInputs.slice(0, 8);
  const secondaryFields = checkoutInputs.slice(8);

  const handleCreateNew = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset(paymentDefaults);
  };

  return (
    <div className="col-span-2 md:pr-7">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header
            title="Payment Link"
            subtext="Fill out all required input fields."
          >
            <div className="flex items-center">
              <Variant
                onClick={handleCreateNew}
                className="mr-2 h-[24px] md:h-[32px]"
                size="sm"
                variant="default"
              >
                New
              </Variant>
              <Variant
                onClick={handleCreateNew}
                className="mr-2 h-[24px] md:h-[32px]"
                size="sm"
                variant="destructive"
              >
                Clear
              </Variant>
            </div>
          </Header>

          <CardContent className="grid grid-cols-2 gap-x-2 gap-y-8 md:gap-x-8">
            {primaryFields.map((item) => (
              <FormField
                disabled={loading}
                key={item.name}
                control={control}
                name={item.name}
                render={({ field }) => render({ field, item })}
              />
            ))}
          </CardContent>
          <Advanced
            control={control}
            fields={secondaryFields}
            loading={loading}
          />
          <CardFooter>
            <Submit />
          </CardFooter>
        </form>
      </Form>
    </div>
  );
};
