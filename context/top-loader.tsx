"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Ctx = { start: () => void; stop: () => void };
const Ctx = createContext<Ctx | null>(null);

export const useLoader = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLoader must be inside provider");
  return ctx;
};

export function TopLoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathname = useRef(pathname);
  const completeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    setLoading(true);
    setProgress(0);
  };

  const stop = () => {
    setProgress(100);

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 300);
  };

  // smooth progress
  useEffect(() => {
    if (!loading) return;

    const i = setInterval(() => {
      setProgress((p) => {
        if (p >= 92) return p;
        return p + (100 - p) * 0.08;
      });
    }, 120);

    return () => clearInterval(i);
  }, [loading]);

  // route change done
  useEffect(() => {
    const didRouteChange = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (!loading || !didRouteChange) return;

    completeTimer.current = setTimeout(() => {
      setProgress(100);
    }, 0);

    resetTimer.current = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 300);

    return () => {
      if (completeTimer.current) clearTimeout(completeTimer.current);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [pathname, loading]);

  return (
    <Ctx.Provider value={{ start, stop }}>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-shimmer"
            style={{
              transform: `scaleX(${progress / 100})`,
              transformOrigin: "left",
              transition: "transform 0.25s ease-out",
            }}
          />
        </div>
      )}

      {children}
    </Ctx.Provider>
  );
}
