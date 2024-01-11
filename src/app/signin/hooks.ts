"use client";

import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [clientCreds, setClientCreds] = useState<string | null>(null);

  const getCreds = () => {
    if (window?.localStorage) {
      const creds = localStorage.getItem("clientCreds");
      return creds;
    }
  };

  useEffect(() => {
    if (window?.localStorage) {
      const creds = localStorage.getItem("clientCreds");
      setClientCreds(creds!);
    }
  }, []);

  return { clientCreds, getCreds };
};
