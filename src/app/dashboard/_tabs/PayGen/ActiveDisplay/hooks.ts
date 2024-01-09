"use client";

import { useEffect, useState } from "react";
import { ResponseSchema } from "@resource/payments";

export const useData = (data: Error | ResponseSchema | undefined) => {
  const [values, setValues] = useState<ResponseSchema>({} as ResponseSchema);

  useEffect(() => {
    if (data) {
      setValues(data as ResponseSchema);
    }
  }, [data]);

  return values;
};
