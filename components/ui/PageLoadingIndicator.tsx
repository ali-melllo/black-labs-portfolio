"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const DEBUG = true; // set to false once this is confirmed working

function LoadingBar() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const safetyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settleToken = useRef(0);

  useEffect(() => {
    // if (DEBUG) console.log("[loader] route settled ->", pathname, searchParams.toString());
    settleToken.current += 1;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false);
    if (safetyTimeout.current) {
      clearTimeout(safetyTimeout.current);
      safetyTimeout.current = null;
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    function startLoading() {
    //   if (DEBUG) console.log("[loader] startLoading triggered by:", source);

      // Guard against a race where a fast navigation settles (and turns the
      // bar off) in between this call being made and its deferred update
      // actually running — without this, that late update would flip the
      // bar back on with nothing left to ever turn it off again.
      const tokenAtCall = settleToken.current;
      queueMicrotask(() => {
        if (settleToken.current !== tokenAtCall) {
          if (DEBUG) console.log("[loader] skipping stale setIsLoading(true) — route already settled");
          return;
        }
        if (DEBUG) console.log("[loader] setIsLoading(true) firing");
        setIsLoading(true);
      });

      if (safetyTimeout.current) clearTimeout(safetyTimeout.current);
      safetyTimeout.current = setTimeout(() => {
        if (DEBUG) console.log("[loader] safety timeout hit, forcing isLoading(false)");
        setIsLoading(false);
        safetyTimeout.current = null;
      }, 8000);
    }

    // --- Mechanism 1: patch history.pushState/replaceState ---
    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);

    window.history.pushState = ((...args: Parameters<typeof originalPushState>) => {
      startLoading();
      return originalPushState(...args);
    }) as typeof window.history.pushState;

    window.history.replaceState = ((...args: Parameters<typeof originalReplaceState>) => {
      startLoading();
      return originalReplaceState(...args);
    }) as typeof window.history.replaceState;

    function handlePopState() {
      startLoading();
    }
    window.addEventListener("popstate", handlePopState);

    // --- Mechanism 2: click on an internal <a> ---
    function handleClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isModifiedClick =
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

      if (
        isModifiedClick ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const nextUrl = `${url.pathname}${url.search}`;
      const currentUrl = `${window.location.pathname}${window.location.search}`;
      if (nextUrl === currentUrl) return;

      startLoading();
    }
    document.addEventListener("click", handleClick);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
      if (safetyTimeout.current) clearTimeout(safetyTimeout.current);
    };
  }, []);

//   if (DEBUG) console.log("[loader] render, isLoading =", isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 z-2000 inset-x-0 h-1 w-screen">
      <div className="h-full w-full animate-loader absolute rounded-full bg-muted" />
    </div>
  );
}

export default function PageLoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <LoadingBar />
    </Suspense>
  );
}