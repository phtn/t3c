"use client";

import { useEffect, useState } from "react";
import { type UseFormReturn } from "react-hook-form";
import { onError, onSuccess } from "@utils/toast";
import { PaymentSchema, ResponseSchema } from "@resource/payments";
import { createInvoice } from "./serverOnly";

export const useEmailParams = (form: UseFormReturn<PaymentSchema>) => {
  const [recipient, setRecipient] = useState("");

  useEffect(() => {
    const values = form.getValues();
    setRecipient(values.email);
  }, [form]);

  return { recipient };
};

export const usePayGen = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<any>();

  let startTime: number;

  const Err = (err: Error) => {
    setLoading(false);
    onError(err.name, err.message);
  };

  const Ok = async (response: any) => {
    setLoading(false);
    setPayload(response);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    onSuccess(`Done in ${(elapsedTime / 1000).toFixed(2)} seconds`);
  };

  const createPaymentLink = async (values: PaymentSchema) => {
    startTime = performance.now();
    setLoading(true);

    return await createInvoice(values).then(Ok, Err);
  };

  return { createPaymentLink, loading, payload };
};
