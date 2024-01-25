"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentDefaults } from "./fields";
import { useEmailParams, usePayGen } from "./hooks";
import { ActiveForm } from "./ActiveForm";
import { ActiveDisplay } from "./ActiveDisplay";
import { Container, GridContent } from "./styled";
import { PaymentParams, type PaymentSchema } from "@resource/payments";
import { DashboardWrap } from "../styled";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Variant } from "@@components/variant";

const PayGen = () => {
  const form = useForm<PaymentSchema>({
    resolver: zodResolver(PaymentParams),
    defaultValues: paymentDefaults,
  });

  const { createPaymentLink, loading, payload } = usePayGen();
  const { recipient } = useEmailParams(form);

  const onSubmit = async (values: PaymentSchema) => {
    await createPaymentLink(values);
  };

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <DashboardWrap className="h-[calc(100vh-220px)] overflow-y-scroll md:h-[calc(100vh-110px)]">
      <div className="md flex h-[32px] w-full items-center md:mx-6">
        <Variant variant="ghost" size="xs" onClick={handleGoBack}>
          <ArrowLeftIcon className="mr-2 h-5 w-5 text-indigo-500 dark:text-sky-600" />
          Tools
        </Variant>
      </div>
      <Container>
        <GridContent>
          <ActiveForm form={form} loading={loading} onSubmit={onSubmit} />
          <ActiveDisplay data={payload} recipient={recipient} />
        </GridContent>
      </Container>
    </DashboardWrap>
  );
};

export default PayGen;
