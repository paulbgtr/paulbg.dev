import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

import { viewport, fadeUp } from "@/lib/utils";

export const About = () => {
  return (
    <motion.section
      className="grid gap-8"
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      transition={fadeUp.transition}
      viewport={viewport}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="grid gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          <p className="max-w-2xl text-muted-foreground">
            Calm, structured work that stays understandable as products grow.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          Approach
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </div>
            <p className="text-lg font-semibold">
              Structure, usability, and maintainability come first.
            </p>
            <p className="text-sm text-muted-foreground">
              I build things that are easy to understand, easy to use, and easy
              to evolve.
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Intent
            </div>
            <p className="text-lg font-semibold">
              I don’t chase trends for the sake of trends.
            </p>
            <p className="text-sm text-muted-foreground">
              I care about clarity, intent, and long-term usefulness.
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
