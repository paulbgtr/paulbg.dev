import { motion } from "motion/react";

import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

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
          <a href="https://github.com/your-handle" aria-label="GitHub">
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a
            href="https://www.linkedin.com/in/your-handle"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href="https://x.com/your-handle" aria-label="X">
            X
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href="mailto:your@email.com" aria-label="Email">
            Email
          </a>
        </Button>
      </div>
    </motion.header>
  );
};
