import { tRPC } from "@@trpc/rsc";
import { cookies } from "next/headers";
import { GridBackground } from "./_components/grid";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000),
  );
}

export default async function Home() {
  const cookieData = await getCookieData();
  console.log(typeof cookieData);

  const connection = await tRPC.connect.query().then((res) => res);
  return (
    <GridBackground>
      <div className="border">{connection.status}</div>
    </GridBackground>
  );
}
