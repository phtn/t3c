import {
  Container,
  GridContent,
  ToolContainer,
  Title,
  TitleWrap,
  ToolTitle,
  ToolIcon,
  ToolDescription,
  ToolSubtext,
} from "./styled";
import { DashboardWrap } from "../../styled";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@@components/card";
import { MixIcon } from "@radix-ui/react-icons";

type ToolType = {
  description: string;
  href: string;
  title: string;
};

const Tool = (props: ToolType) => {
  const { description, href, title } = props;
  return (
    <Link href={href}>
      <ToolContainer>
        <CardTitle>{title}</CardTitle>
        <ToolDescription>{description}</ToolDescription>
        <ToolSubtext>
          <span>v0.12.2</span>
        </ToolSubtext>
      </ToolContainer>
    </Link>
  );
};

const ContentTitle = () => (
  <TitleWrap>
    <Title>
      <ToolIcon />
      <ToolTitle>Tools</ToolTitle>
    </Title>
  </TitleWrap>
);

export const Tools = () => {
  return (
    <DashboardWrap>
      <Container>
        <ContentTitle />
        <GridContent>
          <Tool
            description="Generate payment links with Xendit. Customized email and attach files."
            href="/dashboard/paymentlink"
            title="Create Payment Link"
          />
        </GridContent>
      </Container>
    </DashboardWrap>
  );
};
