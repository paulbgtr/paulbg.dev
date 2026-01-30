import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
        <header className="flex flex-wrap items-center justify-between gap-6">
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
        </header>

        <section className="flex flex-col gap-8 rounded-3xl p-8 md:p-12">
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
            <Button size="lg">Get in touch</Button>
          </div>
        </section>

        <Separator />

        <section className="grid gap-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">About</Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Focused on clarity and durability
            </h2>
          </div>
          <div className="grid gap-4 text-muted-foreground md:text-lg">
            <p>
              I’m a web developer focused on structure, usability and
              maintainability. I build things that are easy to understand, easy
              to use and easy to evolve.
            </p>
            <p>
              I don’t chase trends for the sake of trends. I care about clarity,
              intent and long-term usefulness.
            </p>
          </div>
        </section>

        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold md:text-4xl">What I do</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                Website and landing page development
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">UI and interaction design</p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">Frontend implementation</p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                Improving existing products and interfaces
              </p>
            </Card>
          </div>
        </section>

        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold md:text-4xl">How I work</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                I keep scope clear and reasonable
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                I prefer simple solutions over fragile complexity
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                I work in short iterations and ship working results
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <p className="text-lg font-semibold">
                I don’t take every project — fit matters
              </p>
            </Card>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Selected work
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="flex h-full flex-col gap-3 border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Studio Index</h3>
              <p className="text-sm text-muted-foreground">
                Portfolio site for a design studio with clear navigation and
                fast content updates.
              </p>
            </Card>
            <Card className="flex h-full flex-col gap-3 border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Product Docs</h3>
              <p className="text-sm text-muted-foreground">
                Documentation hub that makes complex features easy to find and
                easy to understand.
              </p>
            </Card>
            <Card className="flex h-full flex-col gap-3 border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Interface Refresh</h3>
              <p className="text-sm text-muted-foreground">
                UI cleanup for an internal tool, reducing friction and boosting
                daily usage.
              </p>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="grid gap-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
          <p className="text-muted-foreground md:text-lg">
            If you think we might be a good fit — email me at{" "}
            <span className="font-semibold text-foreground">
              your@email.com
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
