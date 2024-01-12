import { Card } from "@@components/card";
import tw from "tailwind-styled-components";

const Container = tw(Card)`
	md:px-6 pb-8 border-0
`;

const GridContent = tw.div`
	md:grid grid-cols-5 
`;

export { Container, GridContent };
