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
        <p className="text-xl font-semibold">Web Developer</p>
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
