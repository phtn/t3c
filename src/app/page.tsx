import { tRPC } from "@@trpc/rsc";
import { cookies } from "next/headers";
import { Landing } from "./_home/Landing";
import { AuthProvider } from "./_home/Main/Context";
import { Main } from "./_home/Main/Main";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000),
  );
}

const staticData = {
  iso_number: "01234567",
  policy_number: "GC-PCV-100930489",
  given_names: "Olivia",
  surname: "Ponton",
  email: "lecena@proton.me",
  mobile_number: "09162344333",
  amount: "1000",
  assured_name: "Olivia Ponton",
  agent_name: "Manuel",
  item_name: "Insurance Policy",
  item_quantity: "1",
  item_price: "1000",
  item_category: "Auto Insurance",
  fee_type: "Processing",
  fee_amount: "0",
};

export default async function Home() {
  const cookieData = await getCookieData();
  console.log(typeof cookieData);
  // const createInvoice = await tRPC.createInvoice
  //   .query(staticData)
  //   .then((res) => {
  //     console.log(res);
  //     return res;
  //   });
  const connection = await tRPC.connect.query().then((res) => res);
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
