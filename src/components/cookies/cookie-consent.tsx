"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent_v1";

type ConsentState = {
  accepted: boolean;
  timestamp: number;
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setOpen(true);
      }
    } catch (_) {
      // ignore
    }
  }, []);

  const save = (accepted: boolean) => {
    try {
      const state: ConsentState = { accepted, timestamp: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      // ignore
    }
  };

  const handleAcceptAll = () => {
    save(true);
    setOpen(false);
  };

  const handleReject = () => {
    // Only essential cookies (none are set here) – record choice
    save(false);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto container max-w-5xl p-4">
        <div className="rounded-lg border border-border bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 text-white shadow-lg">
          <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/85">
              We use essential cookies to run our website and optional analytics to improve your experience. You can learn more in our{" "}
              <Link href="/cookies" className="underline decoration-blue-500 underline-offset-4 hover:text-blue-400">Cookie Policy</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline decoration-blue-500 underline-offset-4 hover:text-blue-400">Privacy Policy</Link>.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={handleReject}
                className="inline-flex items-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                Reject non‑essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};