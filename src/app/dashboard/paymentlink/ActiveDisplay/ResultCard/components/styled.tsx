import tw from "tailwind-styled-components";

// TITLE
const ColWrap = tw.div`
  flex flex-col
`;

const TitleFlex = tw.div`
  flex items-center mb-8 h-[100px] w-full 
  border-b-[0.33px] border-indigo-300 dark:border-slate-600
`;

const TitleLabel = tw.p`
  mx-1 text-[12px] text-neutral-500
`;

const TitleValue = tw.h2`
	md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr 
  from-indigo-500 dark:to-indigo-300 to-indigo-300 
  leading-none tracking-tight md:mr-6 mr-3
`;

// TOPITEM
const TopItemGrid = tw.div`
  grid grid-cols-3 gap-3
`;

const MidItemGrid = tw.div`
  grid grid-cols-3 gap-3 mt-3
`;

export { ColWrap, MidItemGrid, TitleFlex, TitleLabel, TitleValue, TopItemGrid };
