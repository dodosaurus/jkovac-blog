import "../globals.css";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function SlovakLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
