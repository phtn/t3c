import { type ResponseSchema } from "@resource/payments";

export type ResultProps = {
  values: ResponseSchema;
  recipient: string;
};
