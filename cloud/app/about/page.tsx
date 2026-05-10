import Link from "next/link";
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "Everything we do starts with understanding our customers' needs and exceeding their expectations.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, from product development to customer support.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to stay ahead of the curve and deliver value.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, building trust with our customers and partners.",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              asChild
              className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                About Nexus
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We&apos;re on a mission to empower businesses with innovative
                technology solutions. Founded in 2020, Nexus has grown from a
                small startup to a trusted partner for thousands of companies
                worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="border-t border-border/40 bg-secondary/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Nexus was born from a simple observation: businesses were
                    struggling with fragmented tools and inefficient workflows.
                    Our founders saw an opportunity to create a unified platform
                    that would streamline operations and boost productivity.
                  </p>
                  <p className="leading-relaxed">
                    Today, we serve over 10,000 customers across 50+ countries,
                    helping them save time, reduce costs, and focus on what
                    matters most—growing their business.
                  </p>
                  <p className="leading-relaxed">
                    Our team of passionate engineers, designers, and customer
                    success specialists work tirelessly to ensure that every
                    feature we build solves real problems and delivers
                    measurable value.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-secondary/50 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary">5+</div>
                      <div className="mt-2 text-lg font-medium text-muted-foreground">
                        Years of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-border/40 bg-card/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Join Our Journey
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Ready to see what Nexus can do for your business? Start your
                free trial today and experience the difference.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
