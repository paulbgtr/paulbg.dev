"use client";

import { Separator } from "@/components/ui/separator";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { SelectedWork } from "@/components/selected-work";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
        <Hero />

        <Separator />

        <About />

        <Services />

        <Process />

        <SelectedWork />

        <Separator />

        <Contact />
      </div>
    </main>
  );
}
