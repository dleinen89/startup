import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vehicle Inspection & Training",
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
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
