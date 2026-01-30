import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

import { viewport, fadeUp } from "@/lib/utils";

export const Process = () => {
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
          <h2 className="text-3xl font-semibold md:text-4xl">How I work</h2>
          <p className="max-w-2xl text-muted-foreground">
            Clear process, fast feedback loops, and practical decisions that
            keep projects stable over time.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          Process
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              01
            </div>
            <p className="text-lg font-semibold">
              I keep scope clear and reasonable
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              02
            </div>
            <p className="text-lg font-semibold">
              I prefer simple solutions over fragile complexity
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              03
            </div>
            <p className="text-lg font-semibold">
              I work in short iterations and ship working results
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              04
            </div>
            <p className="text-lg font-semibold">
              I don’t take every project — fit matters
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
