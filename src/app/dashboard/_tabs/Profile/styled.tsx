import tw from "tailwind-styled-components";

const InnerBlock = tw.div`
  space-y-6 md:block
`;

const Flex = tw.div`
  flex flex-col lg:flex-row lg:items-center lg:space-x-12
`;

const AsideWrap = tw.aside`
  border-slate-400/50 dark:border-slate-800 lg:h-[calc(100vh-110px)] lg:w-1/6 lg:border-r-[0.33px]
`;
export { AsideWrap, Flex, InnerBlock };
