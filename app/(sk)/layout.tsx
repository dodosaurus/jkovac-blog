import "../globals.css";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function SlovakLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
