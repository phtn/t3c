import * as React from "react";

import {
  PersonIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  IdCardIcon,
  FileTextIcon,
  ReaderIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  TokensIcon,
  UploadIcon,
  CardStackIcon,
} from "@radix-ui/react-icons";
import { cn } from "@lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export type IconName =
  | "user"
  | "name"
  | "file"
  | "reader"
  | "email"
  | "mobile"
  | "money"
  | "tokens"
  | "upload"
  | "password";
type IconPrefixType = {
  name: IconName;
  icon: React.ReactElement;
};
const iconClassname =
  "h-[16px] w-[20px] mr-[10px] dark:text-orange-200/80 text-slate-600";
const IconPrefix: IconPrefixType[] = [
  { name: "user", icon: <PersonIcon className={iconClassname} /> },
  { name: "name", icon: <IdCardIcon className={iconClassname} /> },
  { name: "file", icon: <FileTextIcon className={iconClassname} /> },
  { name: "reader", icon: <ReaderIcon className={iconClassname} /> },
  { name: "email", icon: <EnvelopeClosedIcon className={iconClassname} /> },
  { name: "mobile", icon: <MobileIcon className={iconClassname} /> },
  { name: "money", icon: <CardStackIcon className={iconClassname} /> },
  { name: "tokens", icon: <TokensIcon className={iconClassname} /> },
  { name: "upload", icon: <UploadIcon className={iconClassname} /> },
  { name: "password", icon: <LockClosedIcon className={iconClassname} /> },
];

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-[0.33px[] focus-within:ring-ring flex h-10 items-center rounded-md bg-neutral-200/60 pl-3 pr-[3px] text-sm ring-offset-teal-500 focus-within:ring-1 focus-within:ring-offset-1 dark:bg-indigo-200/20",
          className,
        )}
      >
        {
          IconPrefix[IconPrefix.findIndex((item) => item.name === props.alt)]
            ?.icon
        }
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full rounded bg-transparent py-2 text-[12px] placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
        />
      </div>
    );
  },
);
Input.displayName = "Input";

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-[0.33px[] ring-offset-background focus-within:ring-ring placeholder:text-muted flex h-10 items-center rounded-md border-gray-400 bg-white pl-3 text-sm focus-within:ring-1 focus-within:ring-offset-2",
          className,
        )}
      >
        <MagnifyingGlassIcon className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          ref={ref}
          className="placeholder:text-muted-foreground w-full p-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  },
);

Search.displayName = "Search";

const Email = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-[0.33px[] ring-offset-background focus-within:ring-ring flex h-10 items-center overflow-hidden rounded-md border-gray-400 bg-white pl-3 text-sm focus-within:ring-1 focus-within:ring-offset-2",
          className,
        )}
      >
        <PersonIcon className="text-primary/70 mx-[1px] h-[18px] w-[18px]" />
        <input
          {...props}
          type="email"
          ref={ref}
          className="placeholder:text-muted-foreground/50 ml-[12px] w-full border-l border-[#efefef] px-[12px] py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  },
);

Email.displayName = "Email";

const Password = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "ring-offset-background focus-within:ring-ring flex h-10 items-center overflow-hidden rounded-md border-[0.33px] border-gray-400 bg-white pl-3 text-sm focus-within:ring-1 focus-within:ring-offset-2",
          className,
        )}
      >
        <LockClosedIcon className="text-primary/70 h-[20px] w-[20px]" />
        <input
          {...props}
          type="email"
          ref={ref}
          className="placeholder:text-muted-foreground/50 ml-[12px] w-full border-l border-[#efefef] px-[12px] py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  },
);

Password.displayName = "Password";

export { Email, Input, Password, Search };
