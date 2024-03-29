import { cookies } from "next/headers";
import { Main } from "./_home/Main/Main";

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

  return <Main />;
}
