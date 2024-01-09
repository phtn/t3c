"use client";

import { useCallback, useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "./Context";
import { Landing } from "../Landing";
import { opts } from "@utils/helpers";
import { Loader } from "src/app/_components/loader";
import { useRouter } from "next/navigation";

const Authenticated = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <Loader />;
};

export const Main = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log(context?.user);
  }, [context]);

  const ViewOptions = useCallback(() => {
    const isAuthed = context?.user !== null;
    const options = opts(<Authenticated />, <Landing />);
    return <>{options.get(isAuthed)}</>;
  }, [context?.user]);

  const LoadingOptions = useCallback(() => {
    const options = opts(<Loader />, <ViewOptions />);
    return <>{options.get(context?.loading!)}</>;
  }, [context?.loading]);

  return (
    <AuthProvider>
      <LoadingOptions />
    </AuthProvider>
  );
};
