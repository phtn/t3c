import { Card, CardDescription } from "@@components/card";
import tw from "tailwind-styled-components";

const Container = tw(Card)`
	md:px-6 border-0
`;

const GridContent = tw.div`
	md:grid xl:grid-cols-3 md:grid-cols-2 gap-6 
`;

const ToolContainer = tw(Card)`
  dark:border-slate-600 border-sky-500 p-3 pt-5
`;

const ToolTitleWrap = tw.div`
  flex items-center justify-between
`;

const ToolTag = tw.div`
  bg-gradient-to-tr from-sky-400 to-pink-400 rounded-md text-[10px] flex items-center justify-center 
  h-[24px] w-fit px-3 uppercase text-white font-bold 
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
  ToolContainer,
  ToolDescription,
  ToolSubtext,
  ToolTag,
  ToolTitleWrap,
};
