import { useCallback, useEffect, useState } from "react";
import { Variant } from "src/app/_components/variant";
import { SmoothWriter, type Word } from "@@components/writer";
import { getNextElement } from "@utils/helpers";
import {
  InnerCol,
  JumboActions,
  JumboFlex,
  JumboSubtext,
  JumboTitle,
  JumboWrap,
  JumboWriter,
  PaygenLogo,
} from "./styled";

const cls = "text-indigo-500";

const headlines: Word[][] = [
  [{ text: "Reliable Payments", className: cls }],
  [{ text: "Credit Card Payments", className: cls }],
  [{ text: "Bank Transfers", className: cls }],
  [{ text: "E-wallets", className: cls }],
  [{ text: "OTCs", className: cls }],
  [{ text: "Subscriptions", className: cls }],
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
        <JumboFlex>
          <PaygenLogo />
          <JumboTitle>PayGen</JumboTitle>
        </JumboFlex>
        <JumboWriter>
          <Writer />
        </JumboWriter>
        <JumboSubtext>
          The Arrival of Advanced Payment Integration for your complex business
          transactions.
        </JumboSubtext>
        <JumboActions>
          <Variant variant="default">Get Started</Variant>
          <Variant variant="outline">Request Demo</Variant>
        </JumboActions>
      </InnerCol>
    </JumboWrap>
  );
};
