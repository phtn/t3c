import { Card } from "@@components/card";
import tw from "tailwind-styled-components";

const Container = tw(Card)`
	md:px-6 border-0
`;

const GridContent = tw.div`
	md:grid lg:grid-cols-4 md:grid-cols-2 gap-6 
`;

const ToolsTitleWrap = tw.div`
  h-[48px] flex items-start justify-between
`;

const ToolsTitle = tw.div`
  text-[1.5rem] font-bold flex items-center
`;

export { Container, GridContent, ToolsTitle, ToolsTitleWrap };
