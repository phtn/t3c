import { type AccountResource } from "@resource/account";
import { db } from "@lib/db";
import { doc, setDoc } from "firebase/firestore";
import { ResourceSchema } from "@resource/payments";

export const createFirebaseAccount = async (
  customer: ResourceSchema,
  id: string,
) => {
  const Err = (err: Error) => {
    return err;
  };
  const Ok = () => {
    return "success";
  };

  if (typeof customer !== "object") {
    throw new Error("customer must be an object");
  }

  if (customer) {
    await setDoc(doc(db, "customers", id), {
      ...customer,
      is_active: true,
      created_by: "admin",
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
    }).then(Ok, Err);

    console.log("Account created with ID: ", id);
  }
};
