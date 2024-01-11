import { Card } from "@@components/card";
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

export { Container, GridContent, Title, TitleWrap };
