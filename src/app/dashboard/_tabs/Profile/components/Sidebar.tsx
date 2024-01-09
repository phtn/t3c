"use client";

import { useState } from "react";
import { cn } from "@lib/utils";
import { Variant } from "@@components/variant";

const items = [
  { title: "Profile", href: "profile" },
  { title: "Settings", href: "settings" },
  { title: "Configure", href: "conf" },
];

export const Sidebar = () => {
  const [active, setActive] = useState("profile");

  const handleOnSelect = (href: string) => () => {
    setActive(href);
  };
  const handleSignOut = () => {
    console.log(null);
  };
  return (
    <nav
      className={cn(
        "flex h-full space-x-4 p-6 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-4",
      )}
    >
      {items.map((item) => (
        <Variant
          className="w-full font-medium"
          key={item.href}
          onClick={handleOnSelect(item.href)}
          variant={active === item.href ? "secondary" : "ghost"}
        >
          {item.title}
        </Variant>
      ))}

      <Variant
        className="w-full font-medium"
        onClick={handleSignOut}
        variant="destructive"
      >
        Sign out
      </Variant>
    </nav>
  );
};
