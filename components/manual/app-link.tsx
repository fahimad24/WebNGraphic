"use client";

import { useLoader } from "@/context/top-loader";
import Link from "next/link";

export function AppLink({ href, children, className = "", ...props }: any) {
  const { start, stop } = useLoader();

  return (
    <Link
      href={href}
      onClick={() => {
        start();
        // stop will be called in page component after data is loaded
        // stop(); --- IGNORE ---
      }}
      className={`${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
