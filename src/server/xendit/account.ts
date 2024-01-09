import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type {
  PaymentSchema,
  ResourceData,
  ResourceSchema,
  ResponseData,
  ResponseSchema,
} from "@resource/payments";
import { type AccountResource, url } from "@resource/account";
import { createAxiosInstance, accountConfig as config } from "./axios";
import { createFirebaseAccount } from "@@fire/create";
import { shapeAccount as transform } from "@server/transformer/shapeValues";
import { createLink } from "./createLink";

export const onCreateAccount = async (
  body: AccountResource,
  axiosInstance: AxiosInstance,
) => {
  const { data, status } = await axiosInstance.post<ResponseSchema>(url, body);
  return { data, status };
};

export const createAccount = async (values: PaymentSchema) => {
  const data = transform(values);
  const axiosInstance = createAxiosInstance(config);

  const Err = (err: Error) => {
    // error({...err, id: data.reference_id})
    return err;
  };
  const Ok = async (response: ResponseData) => {
    console.log(response);
    const id: string = response?.data?.id;
    // await createFirebaseAccount(response?.data, id);
    return await createLink(values, id);
  };

  return await onCreateAccount(data, axiosInstance).then(Ok, Err);
};
