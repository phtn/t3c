"use client";

import { useEffect } from "react";
import { Jumbotron } from "./components/Jumbotron";
import { Aliens } from "./components/Aliens";
import { Pyramids } from "./components/Pyramids";
import { User } from "./components/User";
import { Arrival } from "./components/Arrival";
import { GridBackground } from "src/app/_components/grid";
import { LandingViews } from "./components/styled";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@lib/db";

export const Landing = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, [router]);
  return (
    <GridBackground>
      <User />
      <Aliens />
      <Arrival t={`top-[calc(100vh-92.6vh)]`} />

      <LandingViews>
        <Jumbotron />
        <Pyramids />
      </LandingViews>
    </GridBackground>
  );
};
