"use client";

import { GridBackground } from "@@components/grid";
import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./hooks";
import { opts } from "@utils/helpers";
import { Signin } from "./signin";
import { VerifyAccount } from "./verify";
import { onSuccess } from "@utils/toast";
import { Aliens } from "../_home/Landing/components/Aliens";
import { Arrival } from "../_home/Landing/components/Arrival";
import { JumboFlex, JumboTitle, PaygenLogo } from "./styled";
import { useRouter } from "next/navigation";

const Sign = () => {
  const { getCreds } = useLocalStorage();

  const creds = getCreds();
  const client = JSON.parse(creds!);
  const withCreds = getCreds() !== null && client?.clientId === "118942";
  const SignOptions = useCallback(() => {
    const options = opts(<Signin />, <VerifyAccount />);
    return <>{options.get(withCreds)}</>;
  }, [withCreds, creds, getCreds(), client]);

  if (withCreds) {
    onSuccess("AutoProtect", "Welcome to PayGen");
  }

  return (
    <GridBackground>
      <div className="z-50 mt-[-144px] flex h-fit flex-col items-center md:mt-0">
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
