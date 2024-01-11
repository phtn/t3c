"use client";

import { useEffect } from "react";
import { Content, Settings } from "./styled";
import { Profile } from "./_tabs/Profile/Profile";
import Reports from "./_tabs/Reports";
import { useContext } from "react";
import { AuthContext } from "../_home/Main/Context";
import { useRouter } from "next/navigation";
import { Tools } from "./_tabs/Tools/Tools";

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
      <Settings>
        <span>Edit your profile or update contact information.</span>
      </Settings>
      <Profile />
    </Content>
  );
};

export default Dashboard;
