import { db } from "@lib/db";
import { collection, doc, updateDoc, setDoc } from "firebase/firestore";
import { type ResourceSchema } from "@resource/payments";

export const update = async (data: ResourceSchema, id: string) => {
  const Err = (err: Error) => {
    return err;
  };
  const Ok = () => {
    return "success";
  };

  if (data) {
    const docRef = doc(db, "customers", id);
    const invoiceCollection = collection(docRef, "invoice");
    const invoiceRef = doc(invoiceCollection, data.external_id);

    await updateDoc(docRef, {
      updated_at: new Date().getTime(),
    });

    await setDoc(invoiceRef, {
      ...data,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
    }).then(Ok, Err);

    console.log("Payment link created with invoice_id: ", invoiceRef.id);
  }
};
