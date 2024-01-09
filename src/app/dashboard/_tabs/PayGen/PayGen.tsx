import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutDefaults } from "./fields";
import { useEmailParams, usePayGen } from "./hooks";
import { ActiveForm } from "./ActiveForm";
import { ActiveDisplay } from "./ActiveDisplay";
import { Container, GridContent } from "./styled";
import { DashboardWrap } from "../../styled";
import { PaymentParams, type PaymentSchema } from "@resource/payments";

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

  return (
    <DashboardWrap>
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
