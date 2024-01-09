"use client";
import { EvervaultCard } from "src/app/_components/evervault";
import { XBorder } from "src/app/_components/xborder";
import tw from "tailwind-styled-components";

const LandingViews = tw.div`
  items-center md:grid md:grid-cols-2
`;

// JUMBOTRON
const JumboWrap = tw.div`
  z-20 flex items-center justify-start px-3 md:w-[calc(100vw/2)] md:px-12
`;
const InnerCol = tw.div`
  flex flex-col
`;
const JumboTitle = tw.h1`
  bg-gradient-to-tr from-indigo-500 from-30% via-cyan-100 to-orange-50 
  bg-clip-text text-[2.5rem] font-extrabold leading-[3.25rem] 
  text-transparent dark:from-indigo-400 md:text-[3rem]
`;
const JumboWriter = tw.h2`
  text-indigo-500 dark:text-orange-100 font-thin
  mx-[1px] text-[1.75rem] tracking-wider
`;
const JumboSubtext = tw.div`
  flex h-fit items-center text-justify lg:w-[350px] 
  text-[14px] text-neutral-500 dark:text-indigo-300/70 
`;
const JumboActions = tw.div`
  flex h-[70px] items-end justify-around md:justify-between lg:w-[340px]
`;

// PYRAMIDS
const PyramidWrap = tw.div`
  hidden items-center justify-center md:flex md:w-[calc(100vw/2)] md:justify-start 
  bg-[url('/svg/logo-v1.svg')] bg-cover bg-no-repeat 
`;

const DeltaWrap = tw.div`
  mb-[-4px] ml-10
`;
const Delta = tw(XBorder)`
  bg-gradient-to-br from-indigo-700 to-orange-100 
  shadow-lg shadow-indigo-400/50
`;
const Neo = tw(EvervaultCard)`
  h-[calc(100vw/5)] w-[calc(100vw/5)] shadow-lg shadow-indigo-500
`;

// USER
const UserWrap = tw.div`
  absolute top-[calc(100vh-98vh)] flex w-screen justify-end
`;

export {
  LandingViews,
  JumboWrap,
  InnerCol,
  JumboActions,
  JumboSubtext,
  JumboTitle,
  JumboWriter,
  PyramidWrap,
  DeltaWrap,
  Delta,
  Neo,
  UserWrap,
};
