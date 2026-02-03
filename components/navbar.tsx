import { motion } from "motion/react";

import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.header
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={fadeUp.transition}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pavel B.
        </p>
        <span
          className="hidden h-1 w-1 rounded-full bg-muted-foreground/60 sm:inline-flex"
          aria-hidden="true"
        />
        <span className="text-sm font-semibold">Web Developer</span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <span aria-hidden="true">📍</span>
          Tallinn
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
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
        <Button asChild variant="ghost" size="sm">
          <Link href="mailto:pbg.work@pm.me" aria-label="Email">
            Email
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link href="https://cal.eu/pbgtr">Schedule</Link>
        </Button>
      </div>
    </motion.header>
  );
};
