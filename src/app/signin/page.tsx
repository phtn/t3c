"use client";

import { GridBackground } from "@@components/grid";
import { useCallback } from "react";
import { useLocalStorage } from "./hooks";
import { opts } from "@utils/helpers";
import { Signin } from "./signin";
import { VerifyAccount } from "./verify";
import { onSuccess } from "@utils/toast";
import { Aliens } from "../_home/Landing/components/Aliens";
import { Arrival } from "../_home/Landing/components/Arrival";
import { JumboFlex, JumboTitle, PaygenLogo } from "./styled";

const Sign = () => {
  const { getCreds } = useLocalStorage();
  const creds = getCreds();
  const client = JSON.parse(creds!);
  const withCreds = getCreds() !== null && client?.clientId === "118942";
  const SignOptions = useCallback(() => {
    const options = opts(<Signin />, <VerifyAccount />);
    return <>{options.get(withCreds)}</>;
  }, [withCreds]);

  if (withCreds) {
    onSuccess("AutoProtect", "Welcome to PayGen");
  }

  return (
    <GridBackground>
      <div className="z-50 flex flex-col items-center">
        <Aliens />
        <JumboFlex>
          <PaygenLogo />
          <JumboTitle>PayGen</JumboTitle>
        </JumboFlex>
        <SignOptions />
      </div>
    </GridBackground>
  );
};
export default Sign;
