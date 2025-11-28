"use client";

import React from "react";

export const WhyUsPictogram = ({ className = "h-7 w-7", title }: { className?: string; title?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ServicesPictogram = ({ className = "h-7 w-7", title }: { className?: string; title?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="6" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="9.5" y="6" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="16" y="6" width="5" height="5" rx="1.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="8" y1="8.5" x2="9.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14.5" y1="8.5" x2="16" y2="8.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="3" y1="16" x2="21" y2="16" opacity="0.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);