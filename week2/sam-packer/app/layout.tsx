import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "☠️🔥 SAM'S X-TREME CYBER ZONE 2000 🔥☠️ *~*~ENTER IF U DARE~*~*",
  description:
    "*** THE #1 RADDEST SITE ON THE INFORMATION SUPERHIGHWAY *** SIGN MY GUESTBOOK!!! Best viewed in Netscape Navigator 4.0 at 800x600",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
