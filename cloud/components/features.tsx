import { Sparkles, Shield, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized infrastructure. Your applications run smoother and faster than ever.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security protocols protect your data. We implement the latest security standards to keep your information safe.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and focus on what matters. Our AI-powered tools help you work smarter, not harder.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain deep insights with comprehensive analytics. Make data-driven decisions that propel your business forward.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border/40 bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Powerful features designed to help you build, scale, and succeed in
            today&apos;s competitive landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/40 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
