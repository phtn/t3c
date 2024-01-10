export const Arrival = ({ t }: { t: string }) => {
  const first = `lg:inset-x-20 via-indigo-500 to-transparent h-[2px] w-2/4 blur-[14px]`;
  const second = `lg:inset-x-20 via-indigo-500 to-transparent h-px w-4/4`;
  const third = `lg:inset-x-40 via-sky-500 to-transparent h-[1px] w-4/4 blur-[10px]`;
  const fourth = `lg:inset-x-40 via-orange-300 to-transparent h-px w-4/4`;
  const className = `absolute bg-gradient-to-r from-transparent`;
  return (
    <>
      <div className={`${className} ${t} ${first}`} />
      <div className={`${className} ${t} ${second}`} />
      <div className={`${className} ${t} ${third}`} />
      <div className={`${className} ${t} ${fourth}`} />
    </>
  );
};
