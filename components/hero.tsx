import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { fadeUp } from "@/lib/utils";

export const Hero = () => {
  return (
    <motion.section
      className="grid gap-8 rounded-3xl p-6 sm:p-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:p-12"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={{ ...fadeUp.transition, delay: 0.1 }}
    >
      <div className="grid gap-6 sm:gap-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">Web Developer</Badge>
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Small business, early product, redesigns
          </span>
        </div>
        <div className="grid gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I build clear, modern websites and web products.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            I help small businesses and early teams launch, improve, or
            redesign what their customers use.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-12 w-full px-6 text-base sm:w-auto"
          >
            <Link href="mailto:pavel@paulbg.dev">Get in touch</Link>
          </Button>
          <Button
            variant="secondary"
            asChild
            size="lg"
            className="h-12 w-full px-6 text-base sm:w-auto"
          >
            <Link href="#selected-work">View selected work</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Prefer email? Great. Prefer a call?{" "}
          <Link href="https://cal.eu/pbgtr" className="underline underline-offset-4">
            Schedule one here
          </Link>
          .
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_60%)] opacity-40 blur-2xl"
        />
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/70 p-2 shadow-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-[22px] bg-muted">
            <Image
              src="/portrait.png"
              alt="Portrait of Pavel B."
              width={720}
              height={900}
              priority
              className="h-full w-full object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
