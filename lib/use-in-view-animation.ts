"use client";

import { useState, useEffect } from "react";

/**
 * Returns "hidden" only after client mount so framer-motion
 * animations work. During SSR / before hydration, returns false
 * which tells motion to skip the initial state — keeping sections
 * visible in the static HTML.
 */
export function useInitial(): "hidden" | false {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? "hidden" : false;
}
