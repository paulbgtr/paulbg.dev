import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";

import { viewport, fadeUp } from "@/lib/utils";

const projects = [
  {
    title: "Talente",
    description:
      "Website redesign for a beauty salon focused on clarity, trust, and easier booking decisions.",
    href: "https://talente.ee",
    image: {
      src: "/talente.png",
      alt: "Talente booking app landing page preview",
    },
    tags: ["Design System", "Web"],
    role: "Design + Frontend",
    year: "2025",
    outcome:
      "Redesigned and launched a clean salon website with a clearer path to booking from key pages.",
    aspect: "aspect-[16/10]",
    gradient:
      "bg-[linear-gradient(120deg,hsl(var(--muted))_0%,hsl(var(--accent))_45%,hsl(var(--muted))_100%)]",
  },
  {
    title: "TalTech Collectibles",
    description:
      "Team project combining NFC keychains with a companion web app.",
    href: "https://taltech-collectibles.vercel.app/",
    image: {
      src: "/taltech-collectibles.png",
      alt: "TalTech Collectibles web app preview",
    },
    tags: ["Hardware", "Product"],
    role: "UX + Frontend + Product design lead",
    year: "2025",
    outcome:
      "Led the team to ship a working end-to-end prototype connecting physical NFC interaction to web.",
    aspect: "aspect-[16/10]",
    gradient:
      "bg-[radial-gradient(circle_at_top,hsl(var(--accent))_0%,hsl(var(--muted))_55%,hsl(var(--background))_100%)]",
  },
  {
    title: "Nebriq",
    description:
      "AI-assisted writing SaaS built and launched as a complete product.",
    href: "https://nebriq.com",
    image: {
      src: "/nebriq.png",
      alt: "Nebriq writing workspace preview",
    },
    tags: ["Product", "Web", "AI"],
    role: "Product Design, Development, AI Integration",
    year: "2024",
    outcome:
      "Shipped from idea to production, validated with real usage, and closed after product learnings.",
    aspect: "aspect-[21/9]",
    gradient:
      "bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--accent))_45%,hsl(var(--muted))_100%)]",
    span: "md:col-span-2",
    maxWidth: "md:max-w-2xl",
  },
];

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
        {projects.map((project) => (
          <Card
            key={project.title}
            className={`group h-full border-border bg-card ${
              project.span ?? ""
            }`}
          >
            <CardHeader className="gap-4">
              <div
                className={`${project.aspect} overflow-hidden rounded-2xl border bg-muted`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={`grid gap-2 ${project.maxWidth ?? ""}`}>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid gap-2">
                <div className="flex items-center gap-3">
                  <span>Role: {project.role}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Outcome: {project.outcome}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" size="sm">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} website`}
                >
                  View project →
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};
