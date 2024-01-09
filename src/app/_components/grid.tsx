import { type ReactNode } from "react";

export const GridBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen items-center  justify-center bg-white bg-grid-black/[0.05] dark:bg-black dark:bg-grid-white/[0.2] lg:p-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
      {children}
    </div>
  );
};
