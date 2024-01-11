import { Tabs, TabsContent, TabsList, TabsTrigger } from "@@components/tabs";
import { Container, LoadingIcon, Title, TitleFlex } from "./styled";
import { AlignCenterVerticalIcon } from "lucide-react";

const Spinner = () => (
  <div className="flex h-[244px] items-center justify-center text-[12px] text-indigo-200">
    <AlignCenterVerticalIcon className="animate-spin" />
  </div>
);

export const Signin = () => {
  return (
    <Container>
      <TitleFlex>
        <LoadingIcon />
        <Title>Verifying...</Title>
      </TitleFlex>

      <Tabs defaultValue="signin">
        <TabsList className="border-b border-slate-800">
          <TabsTrigger value="signin">&middot;</TabsTrigger>
          <TabsTrigger value="register">&middot;</TabsTrigger>
          <TabsTrigger value="help">&middot;</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Spinner />
        </TabsContent>
        <TabsContent value="register">
          <Spinner />
        </TabsContent>
        <TabsContent value="help">
          <Spinner />
        </TabsContent>
      </Tabs>
    </Container>
  );
};
