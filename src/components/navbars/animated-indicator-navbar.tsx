"use client";

import Image from "next/image";
import { MKC_LOGO } from "@/lib/brand";

const AnimatedIndicatorNavbar = () => {
  return (
    <section className="py-4 bg-black">
      <nav className="container mx-auto flex items-center justify-center relative">
        <Image
          src={MKC_LOGO.src}
          alt={MKC_LOGO.alt}
          width={MKC_LOGO.width}
          height={MKC_LOGO.height}
          className="h-[58px] w-auto"
          priority
        />
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };