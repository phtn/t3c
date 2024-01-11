"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutDefaults } from "./fields";
import { useEmailParams, usePayGen } from "./hooks";
import { ActiveForm } from "./ActiveForm";
import { ActiveDisplay } from "./ActiveDisplay";
import { Container, GridContent } from "./styled";
import { PaymentParams, type PaymentSchema } from "@resource/payments";
import { DashboardWrap } from "../styled";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Variant } from "@@components/variant";

const PayGen = () => {
  const form = useForm<PaymentSchema>({
    resolver: zodResolver(PaymentParams),
    defaultValues: checkoutDefaults,
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
    <DashboardWrap className="h-fit overflow-y-scroll">
      <div className="flex h-fit w-full items-center">
        <Variant variant="ghost" onClick={handleGoBack}>
          <ArrowLeftIcon className="mx-2" />
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