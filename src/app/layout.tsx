import "@styles";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCProvider } from "@@trpc/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "t3c",
  description: "T3 with ClerkAuth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCProvider cookies={cookies().toString()}>{children}</TRPCProvider>
      </body>
    </html>
  );
}
