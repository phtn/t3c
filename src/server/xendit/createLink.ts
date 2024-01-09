import {
  type PaymentSchema,
  type ResourceSchema,
  type ResourceData,
  url,
} from "@resource/payments";
import { type AxiosInstance } from "axios";
import { createAxiosInstance, paymentConfig as config } from "./axios";
import { shapePayment as transform } from "@server/transformer/shapeValues";
import { update } from "@@fire/update";

const onCreateLink = async (
  values: ResourceSchema,
  axiosInstance: AxiosInstance,
) => {
  const { data, status } = await axiosInstance.post<ResourceSchema>(
    url,
    values,
  );

  return { data, status };
};

export const createLink = async (values: PaymentSchema, id: string) => {
  const axiosInstance = createAxiosInstance(config);
  const data = transform(values);

  const Err = (err: Error) => {
    return err;
  };

  const Ok = async (response: ResourceData) => {
    await update(response.data, id);
    return response.data;
  };

  return await onCreateLink(data, axiosInstance).then(Ok, Err);
};
