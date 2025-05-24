import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
// TODO: Add Bootstrap RTL CSS import if not already present
import Navbar from "../components/Navbar";
import ClientRoot from "../components/ClientRoot";

export const metadata: Metadata = {
  title: "سامانه مدیریت رستوران",
  description: "رابط کاربری مدرن و زیبا برای مدیریت رستوران (نمونه آزمایشی)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientRoot>
          <Navbar />
          {children}
        </ClientRoot>
      </body>
    </html>
  );
}
