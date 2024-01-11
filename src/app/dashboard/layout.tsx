"use client";

import { ReactNode } from "react";
import { Tab, Trigger } from "./styled";
import { TabsList } from "@@components/tabs";
import Statusbar from "./_tabs/Statusbar/Statusbar";
import { Beam } from "./beam";

const DashLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Tab defaultValue="home">
      <Beam />
      <TabsList>
        <Trigger value="home">Dashboard</Trigger>
        <Trigger value="reports">Reports</Trigger>
        <Trigger value="settings">Settings</Trigger>
        <Trigger value="profile">Account</Trigger>
      </TabsList>
      {children}
    </Tab>
    <Statusbar />
  </div>
);
export default DashLayout;
