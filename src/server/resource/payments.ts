import { z } from "zod";

export const PaymentParams = z.object({
  agent_name: z.string().min(1).max(40),
  amount: z.string().min(3),
  assured_name: z.string().min(1).max(40),
  email: z.string().email().max(40),
  fee_amount: z.string().optional(),
  fee_type: z.string().optional(),
  given_names: z.string().min(1).max(40),
  iso_number: z
    .string()
    .min(8, { message: "ISO number must be atleast 8 digits long." })
    .max(8),
  item_category: z.string().optional(),
  item_name: z.string().optional(),
  item_price: z.string().optional(),
  item_quantity: z.string().optional(),
  mobile_number: z.string().min(10).max(14),
  policy_number: z.string().min(1),
  surname: z.string().min(1).max(40),
});

export type PaymentSchema = z.infer<typeof PaymentParams>;

export const Customer = z.object({
  given_names: z.string().min(1).max(40),
  surname: z.string().min(1).max(40),
  email: z.string().email().max(40),
  mobile_number: z.string().min(10).max(14),
});

export const Notification = z.union([
  z.string().default("email"),
  z.string().default("whatsapp"),
]);

export const LineItem = z.object({
  name: z.string().optional(),
  quantity: z.number().optional(),
  price: z.number(),
  category: z.string().optional(),
});

export const Fees = z.object({
  type: z.string().default("Delivery"),
  value: z.number(),
});

export const CreateLinkResource = z.object({
  external_id: z.string(), // defined,
  amount: z.number(),
  currency: z.string().default("PHP"),
  customer: Customer,
  customer_notification_preference: z
    .object({
      invoice_paid: z.array(Notification),
    })
    .optional(),
  success_redirect_url: z.string().optional(),
  failure_redirect_url: z.string().optional(),
  items: z.array(LineItem),
  fees: z.array(Fees).optional(),
});

export const PaymentResponse = z.object({
  id: z.string(),
  external_id: z.string(),
  user_id: z.string(),
  status: z.string(),
  merchant_name: z.string(),
  merchant_profile_picture: z.string(),
  amount: z.number(),
  expiry_date: z.string(),
  invoice_url: z.string(),
  items: z.array(LineItem),
  avalailable_banks: z.array(z.string()),
  available_retail_outlets: z.array(z.object({})),
  available_ewallets: z.array(z.object({})),
  available_qr_codes: z.array(z.object({})),
  available_direct_debits: z.array(z.object({})),
});

export type ResponseSchema = z.infer<typeof PaymentResponse>;
export type ResourceSchema = z.infer<typeof CreateLinkResource>;
export type ResourceData = { data: ResourceSchema; status: number };
export type ResponseData = { data: ResponseSchema; status: number };

export const url = "/v2/invoices";
