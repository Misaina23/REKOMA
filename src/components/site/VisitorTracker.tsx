import { useEffect } from "react";

const SESSION_KEY = "rekoma-visit-counted";

export function VisitorTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
    void fetch(`${window.location.origin}/api/visits`, { method: "POST" }).catch(() => {});
  }, []);

  return null;
}
