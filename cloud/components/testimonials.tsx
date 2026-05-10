import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "This platform transformed how we operate. The efficiency gains have been remarkable, and our team productivity has doubled.",
    author: "Sarah Johnson",
    role: "CEO, TechVentures",
    initials: "SJ",
  },
  {
    quote:
      "The best investment we've made for our business. The support team is incredible and the features are exactly what we needed.",
    author: "Michael Chen",
    role: "Founder, StartupLab",
    initials: "MC",
  },
  {
    quote:
      "Intuitive, powerful, and reliable. It's become an essential part of our daily workflow. Highly recommend to any growing business.",
    author: "Emily Davis",
    role: "CTO, InnovateCo",
    initials: "ED",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Teams Everywhere
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            See what our customers have to say about their experience working
            with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="relative border-border/40 bg-card/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
