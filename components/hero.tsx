import { motion } from "motion/react";
import Link from "next/link";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

export const Hero = () => {
  return (
    <motion.section
      className="flex flex-col gap-8 rounded-3xl p-8 md:p-12"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={{ ...fadeUp.transition, delay: 0.1 }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary">Web Developer</Badge>
        <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Available for select projects
        </span>
      </div>
      <div className="grid gap-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          I design and build web products that are calm, clear, and easy to
          maintain.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Thoughtful structure, sharp UX, and steady delivery. No noise, no
          trend chasing.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="h-12 px-6 text-base">
          <Link href="mailto:pbg.work@pm.me">Get in touch</Link>
        </Button>
        <Button
          variant="secondary"
          asChild
          size="lg"
          className="h-12 px-6 text-base"
        >
          <Link href="#selected-work">View selected work</Link>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        I work with teams who value clarity over hype.
      </p>
    </motion.section>
  );
};
