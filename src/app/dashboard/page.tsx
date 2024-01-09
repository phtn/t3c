"use client";

import { Content, Settings, Tab, Trigger } from "./styled";
import PayGen from "./_tabs/PayGen";
import { Profile } from "./_tabs/Profile/Profile";
import Reports from "./_tabs/Reports";
import { TabsList } from "../_components/tabs";

const Beam = () => (
  <div className="w-screen">
    <div className="absolute inset-x-20 top-[7.25vh] h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:top-[6.8vh]" />
    <div className="absolute inset-x-20 top-[7.25vh] h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:top-[6.8vh]" />
    <div className="absolute inset-x-60 top-[7.25vh] h-[3px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm md:top-[6.8vh]" />
    <div className="absolute inset-x-60 top-[7.25vh] h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:top-[6.8vh]" />
  </div>
);

const Dashboard = () => (
  <Tab defaultValue="home">
    <Beam />
    <TabsList>
      <Trigger value="home">PayGen</Trigger>
      <Trigger value="reports">Reports</Trigger>
      <Trigger value="settings">Set</Trigger>
      <Trigger value="profile">Pro</Trigger>
    </TabsList>

    <Content>
      <PayGen />

      <Reports />

      <Settings>
        <span>Edit your profile or update contact information.</span>
      </Settings>

      <Profile />
    </Content>
  </Tab>
);

export default Dashboard;
