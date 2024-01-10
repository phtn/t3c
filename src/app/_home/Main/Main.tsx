"use client";

import { useCallback, useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "./Context";
import { Landing } from "../Landing";
import { opts } from "@utils/helpers";
import { Loader } from "src/app/_components/loader";
import { useRouter } from "next/navigation";

export const Main = () => {
  return <Landing />;
};
