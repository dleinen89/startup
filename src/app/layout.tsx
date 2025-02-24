import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StartUp - Vehicle Inspection & Training",
  description: "A comprehensive vehicle inspection application with built-in training guidance for both pre-operation and post-operation checks.",
  keywords: [
    "vehicle inspection",
    "safety checks",
    "pre-operation inspection",
    "post-operation inspection",
    "vehicle maintenance",
    "safety training",
    "fleet management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="min-h-screen">
          <header className="p-4 flex justify-center">
            <Image
              src="/assets/StartUp_Logo.png"
              alt="StartUp Logo"
              width={150}
              height={150}
              className="w-[150px] h-auto"
              priority
            />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
