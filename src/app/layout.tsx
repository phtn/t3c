import "@styles";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCProvider } from "@@trpc/provider";
import { Theme, type ThemeOptions } from "@radix-ui/themes";
import { Toaster } from "@utils/components/ui/sonner";
import { ThemeProvider } from "@utils/components/theme-provider";
import { AuthProvider } from "./_home/Main/Context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PayGen",
  description: "PayGen Reliable Payments",
  icons: [{ rel: "icon", url: "/svg/logo-v1.svg" }],
};

const themeProps: ThemeOptions = {
  appearance: "dark",
  accentColor: "indigo",
  grayColor: "slate",
  panelBackground: "solid",
  radius: "small",
  scaling: "90%",
};

const toasterProps = {
  expand: true,
  richColors: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, max-scale=1, initial-scale=1, user-scalable=no"
        />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class">
          <Theme {...themeProps}>
            <AuthProvider>
              <TRPCProvider cookies={cookies().toString()}>
                {children}
              </TRPCProvider>
            </AuthProvider>
          </Theme>
        </ThemeProvider>
        <Toaster {...toasterProps} />
      </body>
    </html>
  );
}
