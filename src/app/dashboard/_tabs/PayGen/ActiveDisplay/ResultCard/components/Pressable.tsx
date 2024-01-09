import { type ReactNode } from "react";
import { Box, Flex } from "@radix-ui/themes";
import { Card } from "@@components/card";
import { CopyIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "lucide-react";
import { Label } from "../styled";
import tw from "tailwind-styled-components";

type PressableProps = {
  children?: ReactNode;
  content?: string;
  label?: string;
  onClick: () => void;
};

const LinkPressable = ({ content, label, onClick }: PressableProps) => (
  <Container onClick={onClick} className="col-span-2">
    <Box>
      <Label>
        {label}
        <Copy />
      </Label>
      <Value>{content}</Value>
    </Box>
  </Container>
);

const Pressable = ({ content, label, onClick }: PressableProps) => (
  <Container onClick={onClick}>
    <Box>
      <Label>
        {label}
        <Copy />
      </Label>
      <Value>{content}</Value>
    </Box>
  </Container>
);

const Preview = ({ content, label, onClick }: PressableProps) => (
  <Container onClick={onClick}>
    <Flex gap={"3"} align={"center"}>
      <Box>
        <Label>
          {label}
          <Open />
        </Label>
        <Value>{content}</Value>
      </Box>
    </Flex>
  </Container>
);

const Container = tw(Card)`
	flex-auto rounded-md cursor-pointer py-2 px-4  
  bg-neutral-100 dark:bg-indigo-500 
  dark:border-indigo-500 border
`;

const Copy = tw(CopyIcon)`
	mx-3 text-transparent/40 dark:text-transparent/60
`;

const Open = tw(ExternalLinkIcon)`
	mx-3 text-transparent/40 dark:text-transparent/60 h-4 w-4
`;

const Value = tw.div`
  text-indigo-700 dark:text-indigo-300 text-[8px] md:text-[13px] 
  items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`;

export { LinkPressable, Pressable, Preview };
