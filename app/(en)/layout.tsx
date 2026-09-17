import "../globals.css";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
