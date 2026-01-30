"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

const easeInOut = [0.21, 0.61, 0.35, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeInOut },
};

const viewport = { once: true, amount: 0.3 };

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
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

        <motion.section
          className="flex flex-col gap-8 rounded-3xl p-8 md:p-12"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <Badge variant="secondary" className="w-fit">
            Web Developer
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            I design and build websites and web interfaces.
            <br />
            Clean structure, clear logic, no unnecessary noise.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            I work with projects where clarity matters more than hype.
          </p>
          <div>
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="mailto:your@email.com">Get in touch</a>
            </Button>
          </div>
        </motion.section>

        <Separator />

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
                Calm, structured work that stays understandable as products
                grow.
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
                  I build things that are easy to understand, easy to use, and
                  easy to evolve.
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
                A small, focused set of services designed to keep products
                clear, fast, and maintainable.
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
                  Website and landing page development
                </p>
              </div>
            </Card>
            <Card className="border-border bg-card p-6">
              <div className="grid gap-3">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  02
                </div>
                <p className="text-lg font-semibold">
                  UI and interaction design
                </p>
              </div>
            </Card>
            <Card className="border-border bg-card p-6">
              <div className="grid gap-3">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  03
                </div>
                <p className="text-lg font-semibold">Frontend implementation</p>
              </div>
            </Card>
            <Card className="border-border bg-card p-6">
              <div className="grid gap-3">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  04
                </div>
                <p className="text-lg font-semibold">
                  Improving existing products and interfaces
                </p>
              </div>
            </Card>
          </div>
        </motion.section>

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

        <motion.section
          className="grid gap-6"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          transition={fadeUp.transition}
          viewport={viewport}
        >
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Selected work
            </h2>
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
                  Portfolio site for a design studio with clear navigation and
                  fast content updates.
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
                  UI cleanup for an internal tool, reducing friction and
                  boosting daily usage.
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

        <Separator />

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
                If you think we might be a good fit, send a short note and a
                link to what you’re building.
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
      </div>
    </main>
  );
}
