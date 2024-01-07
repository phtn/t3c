import { tRPC } from "@@trpc/rsc";

export default async function Home() {
  const connection = await tRPC.connect.query().then((res) => res);

  return <div className="h-screen bg-indigo-300">{connection.status}</div>;
}
