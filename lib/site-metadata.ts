import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s — ${SITE_NAME}` },
  description: "Poznámky o softvéri, umelej inteligencii a farmácii.",
  applicationName: SITE_NAME,
  icons: { icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }] },
};
