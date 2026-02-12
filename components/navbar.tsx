import { motion } from "motion/react";

import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.header
      className="grid gap-4 sm:flex sm:items-center sm:justify-between"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={fadeUp.transition}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pavel B.
        </p>
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
          <span className="text-sm font-semibold">Web Developer</span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <span aria-hidden="true">📍</span>
            Tallinn
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:hidden">
        <Button asChild size="sm" className="w-full">
          <Link href="mailto:pavel@paulbg.dev" aria-label="Email">
            Email me
          </Link>
        </Button>
        <Button asChild variant="secondary" size="sm" className="w-full">
          <Link href="https://cal.eu/pbgtr">Schedule call</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4 sm:hidden">
        <Link
          href="https://github.com/paulbgtr"
          aria-label="GitHub"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
        </Link>
        <Link
          href="https://pbgtr.bsky.social/"
          aria-label="Bluesky"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Bluesky
        </Link>
      </div>

      <div className="hidden flex-wrap items-center gap-2 sm:flex">
        <Button asChild variant="ghost" size="sm">
          <Link href="https://github.com/paulbgtr" aria-label="GitHub">
            GitHub
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href="https://pbgtr.bsky.social/" aria-label="Bluesky">
            Bluesky
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link href="mailto:pavel@paulbg.dev" aria-label="Email">
            Email me
          </Link>
        </Button>
        <Button asChild variant="secondary" size="sm">
          <Link href="https://cal.eu/pbgtr">Schedule call</Link>
        </Button>
      </div>
    </motion.header>
  );
};
