import { finder } from "@@fire/finder";
import { type PaymentSchema } from "@resource/payments";
import { createLink } from "@xendit/createLink";
import { createAccount } from "@xendit/account";
import { type DocumentData } from "firebase/firestore";

export const lookup = async (values: PaymentSchema) => {
  const mobile_number = values.mobile_number;

  const result: DocumentData[] | undefined = await finder({
    path: "customers",
    mobile_number,
  });

  if (result?.[0]) {
    const id: string = result[0].id;

    return await createLink(values, id).then((response) => response);
  } else {
    return await createAccount(values).then((response) => response);
  }
};
