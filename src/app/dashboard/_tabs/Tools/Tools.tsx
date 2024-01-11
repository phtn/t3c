import { Container, GridContent, ToolsTitle, ToolsTitleWrap } from "./styled";
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
      <Card className="border-slate-600 p-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="my-3 flex items-center text-neutral-400">
          {description}
        </CardDescription>
        <CardDescription className="mt-3 flex w-full justify-end font-mono text-[10px] text-neutral-500">
          <span>v0.12.2</span>
        </CardDescription>
      </Card>
    </Link>
  );
};
export const Tools = () => {
  return (
    <DashboardWrap>
      <Container>
        <ToolsTitleWrap>
          <ToolsTitle>
            <MixIcon className="mr-2" />
            <span>Tools</span>
          </ToolsTitle>
        </ToolsTitleWrap>
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
