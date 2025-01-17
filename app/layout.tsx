import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nike - Mehrshadiy version",
  description: "Created by Mehrshadiy to expend experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
