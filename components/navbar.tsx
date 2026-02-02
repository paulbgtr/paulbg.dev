import { motion } from "motion/react";

import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.header
      className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={fadeUp.transition}
    >
      <div className="w-full space-y-1 sm:w-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Pavel B.
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xl font-semibold">
          <span>Web Developer</span>
          <span className="text-sm font-normal text-muted-foreground">
            <span aria-hidden="true">📍</span> Tallinn
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="https://github.com/paulbgtr" aria-label="GitHub">
              GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="https://pbgtr.bsky.social/" aria-label="X">
              Bluesky
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="mailto:pbg.work@pm.me" aria-label="Email">
              Email
            </Link>
          </Button>
        </div>
        <div className="flex w-full sm:w-auto">
          <Button asChild size="sm" className="w-full sm:w-auto">
            <Link href="https://cal.eu/pbgtr">Schedule</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
