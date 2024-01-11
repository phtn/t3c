import { Tabs, TabsContent, TabsList, TabsTrigger } from "@@components/tabs";
import { Container, Title, TitleFlex, VerifyIcon } from "./styled";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { VerifyForm } from "./verifyform";
import { Help } from "./help";

export const VerifyAccount = () => {
  return (
    <Container>
      <TitleFlex>
        <VerifyIcon />
        <Title>Client Verification</Title>
      </TitleFlex>

      <Tabs defaultValue="verify">
        <TabsList className="border-b border-slate-800">
          <TabsTrigger value="verify">Verify</TabsTrigger>
          <TabsTrigger value="help">
            <QuestionMarkCircledIcon />
          </TabsTrigger>
        </TabsList>
        <VerifyForm />
        <Help />
      </Tabs>
    </Container>
  );
};
