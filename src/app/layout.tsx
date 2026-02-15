import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import type { Metadata } from "next";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crabgame.dev"),
  title: {
    template: "%s | Crab Game Modding",
    default: "Crab Game Modding Documentation",
  },
  description:
    "The ultimate guide to modding Crab Game with BepInEx and Il2Cpp.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
