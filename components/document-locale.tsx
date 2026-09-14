"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DocumentLocale() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "sk";
  }, [pathname]);

  return null;
}

