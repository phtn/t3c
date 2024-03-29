import { type ReactNode } from "react";
import { CardTitle } from "./card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import tw from "tailwind-styled-components";

type HeaderProps = {
  children?: ReactNode;
  title: string;
  subtext?: string;
};

const Primary = tw.div`
	flex items-center justify-between
`;

const Wrap = tw.div`
	flex flex-col h-[100px] justify-center
	mb-8 border-b-[0.33px] dark:border-slate-600 border-indigo-300
`;

const Title = tw(CardTitle)`
  py-2
`;
const Subtext = tw.div`
	flex items-center text-[13px] dark:text-neutral-400 text-neutral-500
`;

export const Header = ({ children, subtext, title }: HeaderProps) => (
  <Wrap>
    <Primary>
      <Title>{title}</Title>
      {children}
    </Primary>
    <Subtext>
      <InfoCircledIcon className="mr-2 text-indigo-400 dark:text-sky-500" />
      {subtext}
    </Subtext>
  </Wrap>
);
