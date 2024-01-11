"use client";

import { GridBackground } from "@@components/grid";
import { useCallback } from "react";
import { useLocalStorage } from "./hooks";
import { opts } from "@utils/helpers";
import { Signin } from "./signin";
import { VerifyAccount } from "./verify";
import { onSuccess } from "@utils/toast";

const Sign = () => {
  const { getCreds } = useLocalStorage();
  const creds = getCreds();
  const client = JSON.parse(creds!);
  const withCreds = getCreds() !== null && client.clientId === "118942";
  const SignOptions = useCallback(() => {
    const options = opts(<Signin />, <VerifyAccount />);
    return <>{options.get(withCreds)}</>;
  }, [withCreds]);

  if (withCreds) {
    onSuccess("AutoProtect", "Welcome to PayGen");
  }

  return (
    <GridBackground>
      <SignOptions />
    </GridBackground>
  );
};
export default Sign;
