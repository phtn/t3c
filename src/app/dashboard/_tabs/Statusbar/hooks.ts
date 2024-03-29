"use client";

import { useEffect, useState } from "react";
import { connectionStatus } from "./serverOnly";

export const useServerStatus = () => {
  const [status, setStatus] = useState(false);

  const checkStatus = async () => {
    const Ok = () => {
      setStatus(true);
    };
    const Err = () => {
      setStatus(false);
    };
    await connectionStatus().then(Ok, Err);
  };

  useEffect(() => {
    checkStatus().then((res) => res);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!status) {
        checkStatus().then((res) => {
          console.log(res);
        });
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [status]);

  return { status };
};
