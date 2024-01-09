"use client";
import { Jumbotron } from "./components/Jumbotron";
import { Aliens } from "./components/Aliens";
import { Pyramids } from "./components/Pyramids";
import { User } from "./components/User";
import { Arrival } from "./components/Arrival";
import { GridBackground } from "src/app/_components/grid";
import { LandingViews } from "./components/styled";

export const Landing = () => {
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
