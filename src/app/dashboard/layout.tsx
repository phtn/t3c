"use client";

import { type ReactNode } from "react";
import { Tab, Trigger } from "./styled";
import { TabsList } from "@@components/tabs";
import { Statusbar } from "./_tabs/Statusbar/Statusbar";
import { Beam } from "./beam";
import { useRouter } from "next/navigation";

const DashLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const handleReportRoute = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <Tab defaultValue="home">
        <Beam />
        <TabsList>
          <Trigger value="home">Dashboard</Trigger>
          <Trigger onClick={handleReportRoute} value="reports">
            Reports
          </Trigger>
          <Trigger onClick={handleReportRoute} value="settings">
            Settings
          </Trigger>
          <Trigger onClick={handleReportRoute} value="profile">
            Account
          </Trigger>
        </TabsList>
        {children}
      </Tab>
      <Statusbar />
    </div>
  );
};
export default DashLayout;
