import { Variant } from "src/app/_components/variant";
import { SmoothWriter, Word } from "src/app/_components/writer";
import { getNextElement } from "@utils/helpers";
import { useCallback, useEffect, useState } from "react";
import {
  InnerCol,
  JumboActions,
  JumboSubtext,
  JumboTitle,
  JumboWrap,
  JumboWriter,
} from "./styled";

const headlines: Word[][] = [
  [{ text: "Reliable Payments", className: "text-indigo-500" }],
  [{ text: "Credit Card Payments", className: "" }],
  [{ text: "Bank Transfer", className: "" }],
  [{ text: "E-wallets", className: "" }],
  [{ text: "Subscriptions", className: "" }],
];

export const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getNextElement(headlines, currentIndex, setCurrentIndex);
      return () => clearTimeout(timeout);
    }, 5000);
  }, [currentIndex]);

  const Writer = useCallback(
    () => <SmoothWriter words={headlines[currentIndex]!} />,
    [currentIndex],
  );

  return (
    <JumboWrap>
      <InnerCol>
        <JumboTitle>PayGen</JumboTitle>
        <JumboWriter>
          <Writer />
        </JumboWriter>
        <JumboSubtext>
          The Arrival of Advanced Payment Integration for your complex
          businesstransactions.
        </JumboSubtext>
        <JumboActions>
          <Variant variant="default">Get Started</Variant>
          <Variant variant="outline">Request Demo</Variant>
        </JumboActions>
      </InnerCol>
    </JumboWrap>
  );
};
