import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import { viewport, fadeUp } from "@/lib/utils";

export const Contact = () => {
  return (
    <motion.section
      className="grid gap-6"
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      transition={fadeUp.transition}
      viewport={viewport}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="grid gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
          <p className="max-w-2xl text-muted-foreground">
            If you think we might be a good fit, send a short note and a link to
            what you’re building.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          Availability
        </Badge>
      </div>
      <Card className="border-border bg-card p-6">
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="grid gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </p>
            <p className="text-2xl font-semibold">your@email.com</p>
            <p className="text-sm text-muted-foreground">
              I reply within 2–3 business days.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <Button asChild size="lg">
              <a href="mailto:your@email.com">Email me</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="https://cal.com/your-handle">Schedule</a>
            </Button>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href="https://github.com/your-handle">GitHub</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://www.linkedin.com/in/your-handle">LinkedIn</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://x.com/your-handle">X</a>
          </Button>
        </div>
      </Card>
    </motion.section>
  );
};
