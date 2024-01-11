import {
  Container,
  GridContent,
  ToolContainer,
  Title,
  TitleWrap,
  TitleFlex,
  ToolIcon,
  ToolDescription,
  ToolSubtext,
  ToolTitleWrap,
  ToolTag,
} from "./styled";
import { DashboardWrap } from "../../styled";
import Link from "next/link";
import { CardTitle } from "@@components/card";

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
        <ToolTitleWrap>
          <CardTitle>{title}</CardTitle>
          <ToolTag>new</ToolTag>
        </ToolTitleWrap>
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
    <TitleFlex>
      <ToolIcon />
      <Title>Tools</Title>
    </TitleFlex>
  </TitleWrap>
);

export const Tools = () => {
  return (
    <DashboardWrap>
      <Container>
        <ContentTitle />
        <GridContent>
          <Tool
            description="Generate payment links with Xendit."
            href="/dashboard/paymentlink"
            title="Create Payment Link"
          />
        </GridContent>
      </Container>
    </DashboardWrap>
  );
};
