import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Palette,
  LineChart,
  Cloud,
  Shield,
  Headphones,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies. From responsive websites to complex web platforms.",
    features: ["React & Next.js", "API Development", "E-commerce Solutions"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that delights. We create intuitive interfaces that drive engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that deliver results. Reach your audience and grow your business.",
    features: ["SEO Optimization", "Content Strategy", "Analytics"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure for modern businesses. Migrate, optimize, and manage with confidence.",
    features: ["AWS & Azure", "DevOps", "Migration Services"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business from digital threats. Comprehensive security solutions for peace of mind.",
    features: ["Security Audits", "Compliance", "Incident Response"],
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock support to keep your business running. Expert assistance whenever you need it.",
    features: ["Live Chat", "Phone Support", "Dedicated Account Manager"],
  },
];

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Comprehensive solutions designed to help your business thrive.
                From development to design, we&apos;ve got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group border-border/40 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="border-t border-border/40 bg-secondary/10 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Let&apos;s discuss how we can help your business grow. Get in
                touch for a free consultation.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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
