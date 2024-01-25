import {
  AvatarIcon,
  GearIcon,
  MixIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import { type ReactElement } from "react";
import tw from "tailwind-styled-components";

export type TitleProps = {
  title: string;
  icon: ReactElement;
};

export const ContentTitle = ({ title, icon }: TitleProps) => (
  <TitleWrap>
    <TitleFlex>
      {icon}
      <Title>{title}</Title>
    </TitleFlex>
  </TitleWrap>
);

const TitleWrap = tw.div`
  h-[48px] flex items-start justify-between
`;

const TitleFlex = tw.div`
  text-[1.25rem] font-bold flex items-center
`;

const Title = tw.div`
  text-indigo-900 dark:text-indigo-50
`;

export const ToolsIcon = tw(MixIcon)`
  mr-2 text-indigo-700 dark:text-indigo-50
`;

export const ReportsIcon = tw(TableIcon)`
  mr-2 text-indigo-700 dark:text-indigo-50
`;

export const SettingsIcon = tw(GearIcon)`
  mr-2 text-indigo-700 dark:text-indigo-50
`;

export const AccountIcon = tw(AvatarIcon)`
  mr-2 text-indigo-700 dark:text-indigo-50
`;
