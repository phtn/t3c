import "@styles";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCProvider } from "@@trpc/provider";
import { Theme, type ThemeOptions } from "@radix-ui/themes";
import { Toaster } from "@utils/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "t3c",
  description: "T3 with ClerkAuth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const themeProps: ThemeOptions = {
  appearance: "light",
  accentColor: "indigo",
  grayColor: "slate",
  panelBackground: "solid",
  radius: "small",
  scaling: "90%",
};

const toasterProps = {
  expand: true,
  richColors: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Theme {...themeProps}>
          <TRPCProvider cookies={cookies().toString()}>{children}</TRPCProvider>
        </Theme>
        <Toaster {...toasterProps} />
      </body>
    </html>
  );
}
