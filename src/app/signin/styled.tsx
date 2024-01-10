import { TabsContent, TabsTrigger } from "@@components/tabs";
import { AvatarIcon } from "@radix-ui/react-icons";
import tw from "tailwind-styled-components";

const Container = tw.div`
  px-5 py-5 bg-black w-full md:w-[350px] h-fit 
  rounded-xl shadow-md
  border-slate-800 border
`;

const TitleFlex = tw.div`
  flex items-center justify-start mb-4
`;

const TitleIcon = tw(AvatarIcon)`
  h-6 w-6 mr-3
`;
const Title = tw.h1`
  text-[24px]
`;

const Trigger = tw(TabsTrigger)`
  text-indigo-200
`;

const SignInContent = tw(TabsContent)`
  flex flex-col h-full items-stretch p-2
`;

export { Container, SignInContent, Title, TitleFlex, Trigger, TitleIcon };
