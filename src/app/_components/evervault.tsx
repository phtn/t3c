import { useMotionValue, type MotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { Photons } from "./photons";
import { cn } from "@lib/utils";

export const EvervaultCard = ({
  text,
  subtext,
  className,
}: {
  text?: string;
  subtext?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  type MouseMove = {
    currentTarget: Element;
    clientX: number;
    clientY: number;
  };

  function onMouseMove({ currentTarget, clientX, clientY }: MouseMove) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "group relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5 shadow-xl shadow-indigo-300/50 clip-path-triangle",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-end justify-center overflow-hidden bg-transparent transition-all duration-1000 hover:scale-[120%]"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex flex-col items-center justify-end">
          <div className="relative flex h-14 w-44 items-center justify-center text-4xl font-extrabold text-white blur-0 hover:text-black">
            <div className="absolute h-full w-full" />
            <span className="z-30 bg-gradient-to-r from-indigo-500 to-orange-300 bg-clip-text text-transparent transition-colors duration-500 group-hover:text-black">
              {text}
            </span>
          </div>
          <span className="px-3 font-bold group-hover:bg-black">{subtext}</span>
        </div>
      </div>
    </div>
  );
};

type PatternParams = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
};

export function CardPattern({ mouseX, mouseY, randomString }: PatternParams) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <Photons />
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-orange-200 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 text-center opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <span className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-indigo-100 transition duration-500">
          {randomString}
        </span>
      </motion.div>
    </div>
  );
}

// const characters =
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const characters = "10N01E10";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

//export const Icon = ({ className, ...rest }: any) => {
//	return (
//		<svg
//			xmlns='http://www.w3.org/2000/svg'
//			fill='none'
//			viewBox='0 0 24 24'
//			strokeWidth='1.5'
//			stroke='currentColor'
//			className={className}
//			{...rest}>
//			<path
//				strokeLinecap='round'
//				strokeLinejoin='round'
//				d='M12 6v12m6-6H6'
//			/>
//		</svg>
//	)
//}
