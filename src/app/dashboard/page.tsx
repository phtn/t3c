"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Content } from "./styled";
import { Reports } from "./_tabs/Reports";
import { Settings } from "./_tabs/Settings";
import { Tools } from "./_tabs/Tools/Tools";
import { AuthContext } from "../_home/Main/Context";
import { Profile } from "./_tabs/Account/Account";

const Dashboard = () => {
  const ctx = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!ctx) {
      router.push("/");
    }
  }, [ctx, router]);
  return (
    <Content>
      <Tools />
      <Reports />
      <Settings />
      <Profile />
    </Content>
  );
};

export default Dashboard;
