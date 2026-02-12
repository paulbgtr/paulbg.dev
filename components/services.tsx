import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

import { viewport, fadeUp } from "@/lib/utils";

export const Services = () => {
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
          <h2 className="text-3xl font-semibold md:text-4xl">What I do</h2>
          <p className="max-w-2xl text-muted-foreground">
            Clear web services for founders and small businesses. No jargon,
            just practical outcomes.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          Services
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              01
            </div>
            <p className="text-lg font-semibold">
              Small business website build
            </p>
            <p className="text-sm text-muted-foreground">
              What you get: a clean, mobile-friendly website with clear pages
              and contact flow.
            </p>
            <p className="text-sm text-muted-foreground">
              Typical timeline: 1-3 weeks.
            </p>
            <p className="text-sm text-muted-foreground">
              Best for: local businesses, studios, and consultants.
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              02
            </div>
            <p className="text-lg font-semibold">
              Early product design + build
            </p>
            <p className="text-sm text-muted-foreground">
              What you get: key screens and user flows designed and built for a
              solid first version.
            </p>
            <p className="text-sm text-muted-foreground">
              Typical timeline: 2-5 weeks.
            </p>
            <p className="text-sm text-muted-foreground">
              Best for: founders moving from idea to working product.
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              03
            </div>
            <p className="text-lg font-semibold">
              Website or product redesign
            </p>
            <p className="text-sm text-muted-foreground">
              What you get: clearer structure, cleaner visuals, and better user
              flow in the places that confuse people.
            </p>
            <p className="text-sm text-muted-foreground">
              Typical timeline: 1-4 weeks.
            </p>
            <p className="text-sm text-muted-foreground">
              Best for: teams with an outdated or hard-to-use interface.
            </p>
          </div>
        </Card>
        <Card className="border-border bg-card p-6">
          <div className="grid gap-3">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              04
            </div>
            <p className="text-lg font-semibold">
              Ongoing improvements
            </p>
            <p className="text-sm text-muted-foreground">
              What you get: regular updates, fixes, and polish so your website
              keeps improving.
            </p>
            <p className="text-sm text-muted-foreground">
              Typical timeline: weekly or bi-weekly iterations.
            </p>
            <p className="text-sm text-muted-foreground">
              Best for: teams without a full-time web developer.
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
