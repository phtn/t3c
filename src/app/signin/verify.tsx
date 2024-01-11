import { Tabs, TabsContent, TabsList, TabsTrigger } from "@@components/tabs";
import { Container, Title, TitleFlex, VerifyIcon } from "./styled";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { VerifyForm } from "./verifyform";

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
        <TabsContent value="help">
          <div className="h-[244px] py-3 text-[12px] text-neutral-400">
            Client IDs are provided by PayGen Provisioning Team. It adds another
            layer of security on top of authentication.
            <br />
            <br />
            For questions, please contact our support team.
            <br />
            <code className="text-neutral-300">hq@re-up.ph</code>
          </div>
        </TabsContent>
      </Tabs>
    </Container>
  );
};
