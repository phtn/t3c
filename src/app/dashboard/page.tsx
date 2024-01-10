"use client";

import { useEffect } from "react";
import { Content, Settings, Tab, Trigger } from "./styled";
import PayGen from "./_tabs/PayGen";
import { Profile } from "./_tabs/Profile/Profile";
import Reports from "./_tabs/Reports";
import { TabsList } from "../_components/tabs";
import Statusbar from "./_tabs/Statusbar/Statusbar";
import { useContext } from "react";
import { AuthContext } from "../_home/Main/Context";
import { useRouter } from "next/navigation";

const Beam = () => (
  <div className="w-screen">
    <div className="absolute inset-x-20 top-[7.25vh] h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:top-[6.8vh]" />
    <div className="w-4/4 absolute inset-x-0 top-[7.25vh] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:top-[6.8vh]" />
    <div className="absolute inset-x-40 top-[7.25vh] h-[3px] w-2/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-[10px] dark:blur-[16px] md:top-[6.8vh]" />
    <div className="absolute inset-x-40 top-[7.25vh] h-px w-2/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:top-[6.8vh]" />
  </div>
);

const Dashboard = () => {
  const ctx = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!ctx) {
      router.push("/");
    }
  }, [ctx, router]);
  return (
    <div>
      <Tab defaultValue="home">
        <Beam />
        <TabsList>
          <Trigger value="home">Dashboard</Trigger>
          <Trigger value="reports">Reports</Trigger>
          <Trigger value="settings">Settings</Trigger>
          <Trigger value="profile">Account</Trigger>
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
      <Statusbar />
    </div>
  );
};

export default Dashboard;
