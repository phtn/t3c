import { tRPC } from "@@trpc/rsc";
import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000),
  );
}

export default async function Home() {
  const connection = await tRPC.connect.query().then((res) => res);
  await getCookieData();

  return <div className="h-screen bg-indigo-300">{connection.status}</div>;
}
