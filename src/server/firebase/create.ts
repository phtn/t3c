import { type AccountResource } from "@resource/account";
import { db } from "@lib/db";
import { doc, setDoc } from "firebase/firestore";

export const createFirebaseAccount = async (
  customer: AccountResource,
  id: string,
) => {
  const Err = (err: Error) => {
    return err;
  };
  const Ok = (response: any) => {
    return response;
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
