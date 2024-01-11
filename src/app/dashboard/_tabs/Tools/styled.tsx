import { Card, CardDescription, CardTitle } from "@@components/card";
import { MixIcon } from "@radix-ui/react-icons";
import tw from "tailwind-styled-components";

const Container = tw(Card)`
	md:px-6 border-0
`;

const GridContent = tw.div`
	md:grid xl:grid-cols-3 md:grid-cols-2 gap-6 
`;

const TitleWrap = tw.div`
  h-[48px] flex items-start justify-between
`;

const Title = tw.div`
  text-[1.5rem] font-bold flex items-center
`;

const ToolContainer = tw(Card)`
  dark:border-slate-600 border-sky-500 p-3 pt-5
`;

const ToolTitle = tw.div`
  text-neutral-500 dark:text-indigo-50
`;

const ToolIcon = tw(MixIcon)`
  mr-2 text-neutral-500 dark:text-indigo-50
`;

const ToolDescription = tw(CardDescription)`
  my-3 flex items-center text-neutral-500 dark:text-neutral-400
`;

const ToolSubtext = tw(CardDescription)`
  mt-3 flex w-full justify-end font-mono text-[10px] text-neutral-500
`;

export {
  Container,
  GridContent,
  Title,
  TitleWrap,
  ToolContainer,
  ToolDescription,
  ToolSubtext,
  ToolTitle,
  ToolIcon,
};
