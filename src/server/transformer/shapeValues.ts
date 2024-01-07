import type { AccountResource } from "@resource/account";
import type { PaymentSchema } from "@resource/payments";
import {
  createInvoiceNumber,
  createReferenceNumber,
  formatMobile,
} from "@utils/helpers";

export const shapePayment = (values: PaymentSchema) => {
  const {
    amount,
    given_names,
    surname,
    email,
    mobile_number,
    iso_number,
    policy_number,
    assured_name,
    item_category,
    item_quantity,
  } = values;

  const customer = {
    given_names,
    surname,
    email,
    mobile_number: formatMobile(mobile_number),
  };
  return {
    external_id: createInvoiceNumber(),
    amount: +amount,
    currency: "PHP",
    customer,
    items: [
      {
        name: `${iso_number} · ${policy_number} · ${assured_name}`,
        category: item_category,
        price: +`${amount}`,
        quantity: +`${item_quantity}`,
      },
    ],
  };
};

export const shapeAccount = (values: PaymentSchema) => {
  const { given_names, surname, email, mobile_number } = values;
  const data: AccountResource = {
    reference_id: createReferenceNumber(),
    type: "INDIVIDUAL",
    individual_detail: {
      given_names,
      surname,
    },
    email,
    mobile_number: formatMobile(mobile_number),
  };
  return data;
};
