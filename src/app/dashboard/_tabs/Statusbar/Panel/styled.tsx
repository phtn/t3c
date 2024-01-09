import { Variant } from "@@components/variant";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Light = tw(SunIcon)`
  w-[20px] group-hover:rotate-90 transition-all duration-500
`;

const Dark = tw(MoonIcon)`
  w-[20px] group-hover:rotate-[130deg] transition-all duration-500
`;

const ModeButton = tw(Variant)`
  group
`;

const Mode = styled(ModeButton).attrs<{ mode?: string }>({
  variant: "ghost",
})``;

const Item = tw.div`
  h-[40px] items-center justify-center flex
`;

const Wrap = tw.div`
  flex items-center justify-center md:w-[300px]
`;

export { Dark, Item, Light, Mode, Wrap };
