"use client";

import { Input } from "@@components/input";
import { Variant } from "@@components/variant";
import { TabsContent } from "@@components/tabs";
import { SectionLabel } from "@@components/label";
import { ChangeEvent, useEffect, useState } from "react";
import { onError } from "@utils/toast";

const SubmitAction = ({ onClick }: { onClick: () => void }) => (
  <div className="flex h-[72px] items-center">
    <Variant onClick={onClick} variant="outline" size="lg" className="w-full">
      Submit
    </Variant>
  </div>
);

export const VerifyForm = () => {
  const [input, setInput] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("clientCreds", JSON.stringify({ clientId: input }));
    }
    if (input !== "118942") {
      onError("Error", "Invalid Client ID");
    }
  };
  return (
    <TabsContent value="verify" className="h-[244px]">
      <div className="py-3">
        <SectionLabel label="Enter Client Id">{null}</SectionLabel>
        <Input
          onChange={onChange}
          alt="name"
          name="clientId"
          placeholder="Client Id"
        />
        <SubmitAction onClick={onSubmit} />
      </div>
    </TabsContent>
  );
};
