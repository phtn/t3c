"use server";

import { tRPC } from "@@trpc/rsc";

export const connectionStatus = async () => {
  return await tRPC.connect.query();
};
