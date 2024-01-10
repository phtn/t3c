"use client";
import { EvervaultCard } from "src/app/_components/evervault";
import { XBorder } from "src/app/_components/xborder";
import tw from "tailwind-styled-components";

const LandingViews = tw.div`
  items-center md:grid md:grid-cols-2
`;

// JUMBOTRON
const JumboWrap = tw.div`
  z-50 flex items-center justify-start px-3 md:w-[calc(100vw/2)] md:px-12
`;
const InnerCol = tw.div`
  flex flex-col
`;

const JumboFlex = tw.div`
  flex items-center justify-center md:justify-start
`;
const PaygenLogo = tw.div`
  h-8 w-8 mr-3 mt-[3px] md:hidden
  bg-[url('/svg/logo-v1.svg')] bg-cover 
`;
const JumboTitle = tw.h1`
  text-transparent bg-clip-text 
  bg-gradient-to-t md:bg-gradient-to-tr  
  from-indigo-500 to-indigo-300
  dark:from-indigo-500 dark:to-orange-100
  text-[2.5rem] md:text-[3rem] 
  font-extrabold leading-[3.25rem] 
  text-center
  
`;
const JumboWriter = tw.h2`
  text-indigo-500 dark:text-orange-100 font-thin
  mx-8 md:mx-0 md:text-[1.75rem] text-[1rem] tracking-wider
  z-50 flex justify-center md:justify-start
`;
const JumboSubtext = tw.div`
  flex h-fit items-center text-justify lg:w-[350px] 
  text-[14px] text-neutral-500 dark:text-indigo-300/70 
  mx-10 md:mx-0 z-50
  
`;
const JumboActions = tw.div`
  flex h-[70px] items-end justify-around md:justify-between lg:w-[340px]
  z-50
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
  JumboFlex,
  JumboSubtext,
  JumboTitle,
  JumboWriter,
  PaygenLogo,
  PyramidWrap,
  DeltaWrap,
  Delta,
  Neo,
  UserWrap,
};
