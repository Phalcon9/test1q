import Image from "next/image"
import { ArrowRight, ChartLine, Clock3, ShieldCheck, Sparkles, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const features = [
  {
    title: "AI-powered campaign writing",
    description:
      "Generate polished launch copy, social captions, and ad variants in seconds.",
    icon: Sparkles,
  },
  {
    title: "Realtime analytics",
    description:
      "See what channels convert best and automatically rebalance your spend.",
    icon: ChartLine,
  },
  {
    title: "Lightning fast setup",
    description:
      "Connect Stripe, HubSpot, and Google Analytics in minutes with prebuilt workflows.",
    icon: Zap,
  },
  {
    title: "Enterprise-grade security",
    description:
      "SOC 2 compliant infrastructure with role-based controls and audit logs.",
    icon: ShieldCheck,
  },
  {
    title: "Always-on automations",
    description:
      "Run welcome journeys, upsell emails, and churn prevention campaigns around the clock.",
    icon: Clock3,
  },
  {
    title: "Conversion-first templates",
    description:
      "Use proven landing page blocks designed from high-performing launches.",
    icon: ArrowRight,
  },
]

const stats = [
  { label: "Monthly visitors converted", value: "1.2M+" },
  { label: "Average lift in paid ROAS", value: "38%" },
  { label: "Teams shipping every week", value: "2,500+" },
]

const testimonials = [
  {
    quote:
      "We launched in two days and hit our quarterly sign-up goal in the first week.",
    name: "Priya K.",
    role: "Growth Lead, Nimbly",
    avatar: "/images/avatar-priya.jpg",
  },
  {
    quote:
      "The automation flows paid for themselves immediately. The team uses it daily now.",
    name: "Jordan M.",
    role: "Head of Marketing, Helio",
    avatar: "/images/avatar-jordan.jpg",
  },
  {
    quote:
      "Beautiful templates, useful insights, and no engineering bottlenecks. Exactly what we needed.",
    name: "Alex R.",
    role: "Founder, Packetly",
    avatar: "/images/avatar-alex.jpg",
  },
]

const buttonBase =
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
const buttonPrimary =
  `${buttonBase} bg-primary text-primary-foreground hover:bg-primary/90`
const buttonOutline =
  `${buttonBase} border border-border bg-background hover:bg-muted`
const buttonSecondary =
  `${buttonBase} bg-secondary text-secondary-foreground hover:bg-secondary/80`

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <p className="text-lg font-semibold tracking-tight">PulsePilot</p>
          <a href="#pricing" className={buttonOutline}>
            View pricing
          </a>
        </header>

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-muted/40 to-background px-6 py-16 md:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,oklch(0.95_0.06_260/.45),transparent_45%)]" />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5">
                New: Lifecycle campaign copilot
              </Badge>
              <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
                Launch high-converting campaigns in hours, not weeks
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
                PulsePilot helps modern teams create landing pages, automate
                follow-ups, and optimize conversions using one collaborative
                marketing workspace.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#start" className={buttonPrimary}>
                  Start free trial
                  <ArrowRight className="size-4" />
                </a>
                <a href="#features" className={buttonOutline}>
                  Explore features
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-dashboard.jpg"
                alt="Marketing analytics dashboard"
                width={1800}
                height={1200}
                className="h-full rounded-2xl border object-cover shadow-2xl"
                priority
              />
              <Card className="absolute right-4 bottom-4 w-52 border bg-background/90 backdrop-blur">
                <CardHeader className="gap-2">
                  <CardDescription>Campaign lift this week</CardDescription>
                  <CardTitle className="text-2xl">+24.8%</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card/70">
                <CardHeader>
                  <CardTitle className="text-3xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" className="pt-20">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Everything your growth team needs
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Designed for fast-moving startups and marketing teams that care
              about measurable pipeline impact.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <feature.icon className="size-4" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-20">
          <div className="mb-8 grid gap-6 overflow-hidden rounded-2xl border bg-card/40 p-4 md:grid-cols-2 md:p-6">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <Badge variant="outline" className="mb-3 w-fit">
                Team collaboration
              </Badge>
              <h3 className="text-2xl font-semibold tracking-tight">
                Keep everyone aligned from campaign brief to launch
              </h3>
              <p className="mt-3 text-muted-foreground">
                Share assets, review copy, and monitor KPIs in one shared workspace
                so product, design, and marketing move together.
              </p>
            </div>
            <Image
              src="/images/team-work.jpg"
              alt="Marketing team collaborating around a laptop"
              width={1400}
              height={900}
              className="order-1 h-64 rounded-xl border object-cover md:order-2 md:h-full"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by product-led teams
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-1 text-base leading-relaxed">
                  “{testimonial.quote}”
                </CardContent>
                <CardFooter className="gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="pt-20">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Simple pricing built to scale
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Start for free, then upgrade when your campaign volume grows.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Starter
                </Badge>
                <CardTitle className="text-3xl">$0</CardTitle>
                <CardDescription>
                  Perfect for trying the platform with your first campaigns.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <a href="#start" className={`${buttonPrimary} w-full`}>
                  Get started
                </a>
              </CardFooter>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <Badge className="w-fit">Growth</Badge>
                <CardTitle className="text-3xl">$49/mo</CardTitle>
                <CardDescription>
                  For teams that need advanced segmentation and automation.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <a href="#start" className={`${buttonSecondary} w-full`}>
                  Start 14-day trial
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="start" className="pt-20">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 to-background">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to ship your next launch?</CardTitle>
              <CardDescription>
                Join thousands of marketers using PulsePilot to move faster and
                convert more visitors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  aria-label="Work email"
                  className="h-10"
                />
                <button
                  type="button"
                  className={`${buttonPrimary} justify-center sm:min-w-44`}
                >
                  Request demo
                </button>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-14 text-sm text-muted-foreground">
          © {new Date().getFullYear()} PulsePilot. Built with Next.js, Tailwind CSS,
          and shadcn/ui.
        </footer>
      </main>
    </div>
  )
}
