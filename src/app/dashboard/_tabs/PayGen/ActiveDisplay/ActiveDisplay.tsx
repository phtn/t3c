"use client";

import { useCallback } from "react";
import { opts } from "@utils/helpers";
import { ResultCard } from "./ResultCard";
import { Display, PayGenLogo } from "./styled";
import { useData } from "./hooks";
import { type ResponseSchema } from "@resource/payments";

type CustomerData = {
  data: Error | ResponseSchema | undefined;
  recipient: string;
};

export const ActiveDisplay = ({ data, recipient }: CustomerData) => {
  const values = useData(data);

  const Options = useCallback(() => {
    const withValues = Object.keys(values).length > 0;
    const options = opts(
      <ResultCard values={values} recipient={recipient} />,
      <PayGenLogo />,
    );
    return <Display>{options.get(withValues)}</Display>;
  }, [values, recipient]);

  return <Options />;
};
