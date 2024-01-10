import { GlobeIcon } from "@radix-ui/react-icons";
import tw from "tailwind-styled-components";

const HStack = tw.div`
  flex items-center w-full justify-between
`;
const ActiveIcon = tw(GlobeIcon)`
  dark:text-sky-400 text-indigo-500 
`;
const InactiveIcon = tw(GlobeIcon)`
  text-orange-500 animate-bounce 
`;
const StatusLeft = tw.div`
  md:w-[100px] h-[40px] flex items-center 
  px-[14px] whitespace-nowrap
`;
const StatusRight = tw.div`
  md:w-[100px] h-[40px] flex items-center justify-end px-[14px]
`;
const StatusLabel = tw.span`
  text-[10px] ml-2
`;
const ActiveStatus = () => (
  <>
    <ActiveIcon />
    <StatusLabel>
      <code className="text-indigo-500 dark:text-neutral-400">Online</code>
    </StatusLabel>
  </>
);

const InactiveStatus = () => (
  <>
    <InactiveIcon />
    <StatusLabel>
      <code className="animate-pulse text-orange-700">Offline</code>
    </StatusLabel>
  </>
);

const VersionNumber = () => (
  <StatusLabel>
    <code className="font-thin text-neutral-400">v0.12.1</code>
  </StatusLabel>
);

export {
  ActiveIcon,
  ActiveStatus,
  HStack,
  InactiveStatus,
  InactiveIcon,
  StatusLeft,
  StatusRight,
  VersionNumber,
};
