import { Card } from "@@components/card";
import tw from "tailwind-styled-components";

const Container = tw(Card)`
	md:px-6 border-1
`;

const InnerBlock = tw.div`
  space-y-6 md:block
`;

const Flex = tw.div`
  flex flex-col lg:flex-row lg:items-center lg:space-x-12
`;

const AsideWrap = tw.aside`
  border-slate-400/50 dark:border-slate-800 lg:h-[calc(100vh-110px)] lg:w-1/6 lg:border-r-[0.33px]
`;

const TitleWrap = tw.div`
  h-[48px] flex items-start justify-between
`;

const Title = tw.div`
  text-[1.5rem] font-bold flex items-center
`;
export { AsideWrap, Container, Flex, InnerBlock, Title, TitleWrap };
