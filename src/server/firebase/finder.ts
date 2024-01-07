import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@lib/db";
import { formatMobile } from "@utils/helpers";

type FinderParams = {
  path: string;
  mobile_number: string;
};
export const finder = async ({ path, mobile_number }: FinderParams) => {
  if (mobile_number) {
    const queryRef = query(
      collection(db, path),
      where("mobile_number", "==", formatMobile(mobile_number)),
    );

    const querySnapshot = await getDocs(queryRef);

    return querySnapshot.docs.map((doc) => doc.data());
  }
  return undefined;
};
