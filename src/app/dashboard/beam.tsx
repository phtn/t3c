export const Beam = () => (
  <div className="w-screen">
    <div className="absolute inset-x-20 top-[7.25vh] h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:top-[6.8vh]" />
    <div className="w-4/4 absolute inset-x-0 top-[7.25vh] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:top-[6.8vh]" />
    <div className="absolute inset-x-40 top-[7.25vh] h-[3px] w-2/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-[10px] dark:blur-[16px] md:top-[6.8vh]" />
    <div className="absolute inset-x-40 top-[7.25vh] h-px w-2/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:top-[6.8vh]" />
  </div>
);
