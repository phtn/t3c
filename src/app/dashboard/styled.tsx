import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Tabs, TabsContent, TabsTrigger } from "../_components/tabs";

const Tab = tw(Tabs)`
  border-b-[0.2px] border-slate-600/80 
  w-screen mt-[24px] 
`;
const Trigger = tw(TabsTrigger)`
  mx-[8px] transition-all duration-400 dark:hover:text-orange-100  
`;
const ContentWrap = tw.div`
  h-[calc(100vh-100px)]
  overflow-y-scroll
`;
const Content = styled(ContentWrap).attrs({})``;

const TabContent = tw(TabsContent)`
`;
type TC = {
  value?: string;
};
const DashboardWrap = styled(TabContent).attrs<TC>({
  value: "home",
})``;

const ReportsWrap = styled(TabContent).attrs<TC>({
  value: "reports",
})``;

const Settings = styled(TabContent).attrs<TC>({
  value: "settings",
})``;

const ProfileWrap = styled(TabContent).attrs<TC>({
  value: "profile",
})``;

export {
  Content,
  DashboardWrap,
  ProfileWrap,
  ReportsWrap,
  Settings,
  Tab,
  Trigger,
};
