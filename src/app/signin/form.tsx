"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@@components/form";
import {
  FormType,
  LoginField,
  LoginFormProps,
  LoginSchema,
  loginDefaults,
  loginFields,
  loginSchema,
} from "./schema";
import { Control, ControllerRenderProps, useForm } from "react-hook-form";
import { Input } from "@@components/input";
import { useCallback } from "react";
import { SubmitAction } from "@@components/submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@lib/db";
import { onSuccess } from "@utils/toast";

type ActiveFormProps = {
  form: FormType;
  loading: boolean;
  loginFields: LoginField[];
  onSubmit: (values: LoginSchema) => void;
};

type RenderProps = {
  field: ControllerRenderProps<LoginSchema>;
  item: LoginField;
};

type FieldProps = {
  fields: LoginField[];
  loading: boolean;
  control: Control<LoginSchema>;
};

const render = ({ field, item }: RenderProps) => (
  <FormItem className="my-4">
    <FormLabel className="text-indigo-100 dark:text-neutral-400">
      {item.label}
    </FormLabel>
    <FormControl>
      <Input
        className="bg-indigo-50"
        alt={item.alt}
        placeholder={item.placeholder}
        type={item.type}
        {...field}
      />
    </FormControl>
  </FormItem>
);

const Fields = ({ control, fields, loading }: FieldProps) => {
  return fields.map((item) => (
    <FormField
      key={item.name}
      disabled={loading}
      control={control}
      name={item.name}
      render={({ field }) => render({ field, item })}
    />
  ));
};

export const ActiveForm = ({
  loading,
  loginFields,
  form,
  onSubmit,
}: ActiveFormProps) => {
  const { handleSubmit, control, formState } = form;
  const { isValid } = formState;

  const Submit = useCallback(() => {
    return (
      <SubmitAction
        activeLabel="Sign in"
        inactiveLabel="Signing in"
        isValid={isValid}
        loading={loading}
      />
    );
  }, [loading, isValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fields control={control} fields={loginFields} loading={loading} />
      <Submit />
    </form>
  );
};

const LoginForm = (props: LoginFormProps) => {
  const { form, onSubmit, loading } = props;
  return (
    <Form {...form}>
      <ActiveForm
        form={form}
        loading={loading}
        loginFields={loginFields}
        onSubmit={onSubmit}
      />
    </Form>
  );
};

export const Login = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaults,
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const onSubmit = (values: LoginSchema) => {
    const { email, password } = values;
    signInWithEmailAndPassword(email, password).then(() => {
      router.push("/dashboard");
      onSuccess("Signed in!");
    });
  };

  return <LoginForm form={form} onSubmit={onSubmit} loading={loading} />;
};
