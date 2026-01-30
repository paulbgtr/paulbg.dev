import { motion } from "motion/react";

import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.header
      className="flex flex-wrap items-center justify-between gap-6"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={fadeUp.transition}
    >
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Pavel B.
        </p>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span>Web Developer</span>
          <span className="text-sm font-normal text-muted-foreground">
            <span aria-hidden="true">📍</span> Tallinn
          </span>
        </div>
      </div>
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
    </motion.header>
  );
};
