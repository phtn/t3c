import { type ReactNode } from "react";
import { Box, Flex } from "@radix-ui/themes";
import { Card } from "@@components/card";
import { CopyIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "lucide-react";
import { Label } from "../styled";
import tw from "tailwind-styled-components";
import Link from "next/link";

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

const Preview = ({
  content,
  label,
  onClick,
  link,
}: PressableProps & { link: string }) => (
  <Container onClick={onClick}>
    <Flex gap={"3"} align={"center"}>
      <Link target="_blank" href={link!} rel="noopener noreferrer">
        <Label>
          {label}
          <Open />
        </Label>
        <Value>{content}</Value>
      </Link>
    </Flex>
  </Container>
);

const Container = tw(Card)`
	flex-auto rounded-md cursor-pointer py-2 px-4  
  bg-neutral-100 dark:bg-sky-800 
  dark:border-sky-900 border 
  hover:scale-[98%] transition-all duration-300
`;

const Copy = tw(CopyIcon)`
	mx-3 text-transparent/40 dark:text-orange-300/80
`;

const Open = tw(ExternalLinkIcon)`
	mx-3 text-transparent/40 dark:text-orange-300/80 h-4 w-4
`;

const Value = tw.div`
  text-indigo-700 dark:text-sky-200 text-[8px] md:text-[13px] 
  items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`;

export { LinkPressable, Pressable, Preview };
