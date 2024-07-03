import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Card Component",
  description: "Profile Card Component challenge on Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className} bg-darkCyan`}>{children}</body>
    </html>
  );
}
