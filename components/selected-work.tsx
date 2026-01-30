import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

import { viewport, fadeUp } from "@/lib/utils";

export const SelectedWork = () => {
  return (
    <motion.section
      id="selected-work"
      className="grid gap-6"
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      transition={fadeUp.transition}
      viewport={viewport}
    >
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-semibold md:text-4xl">Selected work</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="group flex h-full flex-col gap-5 border-border bg-card p-6">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border bg-muted">
            <div className="h-full w-full bg-[linear-gradient(120deg,hsl(var(--muted))_0%,hsl(var(--accent))_45%,hsl(var(--muted))_100%)]" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Design System</Badge>
            <Badge variant="secondary">Web</Badge>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Studio Index</h3>
            <p className="text-sm text-muted-foreground">
              Portfolio site for a design studio with clear navigation and fast
              content updates.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Role: Design + Frontend</span>
            <span className="text-border">•</span>
            <span>2024</span>
          </div>
        </Card>
        <Card className="group flex h-full flex-col gap-5 border-border bg-card p-6">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border bg-muted">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,hsl(var(--accent))_0%,hsl(var(--muted))_55%,hsl(var(--background))_100%)]" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Docs</Badge>
            <Badge variant="secondary">Product</Badge>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Product Docs</h3>
            <p className="text-sm text-muted-foreground">
              Documentation hub that makes complex features easy to find and
              easy to understand.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Role: UX + Frontend</span>
            <span className="text-border">•</span>
            <span>2023</span>
          </div>
        </Card>
        <Card className="group flex h-full flex-col gap-5 border-border bg-card p-6 md:col-span-2">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl border bg-muted">
            <div className="h-full w-full bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--accent))_45%,hsl(var(--muted))_100%)]" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">UX Audit</Badge>
            <Badge variant="secondary">Internal Tool</Badge>
          </div>
          <div className="grid gap-2 md:max-w-2xl">
            <h3 className="text-xl font-semibold">Interface Refresh</h3>
            <p className="text-sm text-muted-foreground">
              UI cleanup for an internal tool, reducing friction and boosting
              daily usage.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Role: UI Refresh + Delivery</span>
            <span className="text-border">•</span>
            <span>2022</span>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
