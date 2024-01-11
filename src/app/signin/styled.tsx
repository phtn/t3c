import { TabsContent, TabsTrigger } from "@@components/tabs";
import { AvatarIcon, PieChartIcon } from "@radix-ui/react-icons";
import { ShieldCheckIcon } from "lucide-react";
import tw from "tailwind-styled-components";

const Container = tw.div`
  px-5 py-5 bg-black w-full md:w-[350px] h-fit 
  rounded-xl shadow-md z-50 mx-3 md:mx-0
  border-slate-800 border
`;

const TitleFlex = tw.div`
  flex items-center justify-start mb-4
`;

const TitleIcon = tw(AvatarIcon)`
  h-6 w-6 mr-3 text-indigo-200
`;
const VerifyIcon = tw(ShieldCheckIcon)`
  h-6 w-6 mr-3 text-indigo-200
`;

const LoadingIcon = tw(PieChartIcon)`
  h-6 w-6 mr-3 text-indigo-200 animate-spin
`;
const Title = tw.h1`
  text-[24px] text-indigo-200
`;

const Trigger = tw(TabsTrigger)`
  text-indigo-200
`;

const SignInContent = tw(TabsContent)`
  flex flex-col h-full items-stretch p-2
`;

export {
  Container,
  LoadingIcon,
  SignInContent,
  VerifyIcon,
  Title,
  TitleFlex,
  Trigger,
  TitleIcon,
};
