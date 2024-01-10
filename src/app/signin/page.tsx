"use client";

import { GridBackground } from "@@components/grid";
import { Container, TitleFlex, Title, TitleIcon } from "./styled";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@@components/tabs";
import { Login } from "./form";

const Signin = () => {
  return (
    <GridBackground>
      <Container>
        <TitleFlex>
          <TitleIcon />
          <Title>Sign in to your account</Title>
        </TitleFlex>

        <Tabs defaultValue="signin">
          <TabsList className="border-b border-slate-800">
            <TabsTrigger value="signin">Sign in</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="help">Help</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Login />
          </TabsContent>
          <TabsContent value="register">
            <div className="h-[244px] text-[12px] text-indigo-200">
              Contact Admin
            </div>
          </TabsContent>
          <TabsContent value="help">
            <div className="h-[244px] text-[12px] text-indigo-200">
              <code>
                Contact Support:
                <br />
                hq@re-up.ph
              </code>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </GridBackground>
  );
};
export default Signin;
