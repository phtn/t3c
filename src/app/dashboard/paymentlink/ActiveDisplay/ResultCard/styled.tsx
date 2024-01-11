"use client";

import { Card, Card as Display } from "@@components/card";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const ResultWrap = tw(Display)`
  border-0 rounded-0 h-fit overflow-hidden bg-transparent
`;
const Result = styled(ResultWrap)``;

const Label = tw.span`
  text-indigo-950 dark:text-neutral-50 text-[10px] md:text-[0.85rem] font-bold tracking-tight flex items-center whitespace-nowrap
`;

const EmailWrap = tw(Card)`
  border-0 h-fit my-6 rounded-md overflow-y-scroll 
  grid grid-cols-3 gap-4
`;
const TextArea = tw.textarea`
  h-[255px] w-full bg-neutral-50 dark:bg-transparent/20 p-3 
  border dark:border-slate-800 rounded-lg text-sm placeholder:text-neutral-400
`;
const MessageArea = styled(TextArea).attrs({
  name: "message",
  placeholder: "Write a custom message to include in the email. (Optional)",
})`
  resize: none;
`;

const MessageWrap = tw.div`
  col-span-2
`;
const Uploads = tw.div`
  border-0 rounded overflow-y-scroll
`;
const ActionsWrap = tw.div`
  flex justify-between items-center w-full h-[48px] mb-6
`;

export {
  ActionsWrap,
  EmailWrap,
  Label,
  Result,
  MessageArea,
  MessageWrap,
  Uploads,
};
