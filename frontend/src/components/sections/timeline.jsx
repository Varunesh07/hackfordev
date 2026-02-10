"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Trophy, Users } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-card border border-border rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const timelineEvents = [
  {
    date: "Feb 16, 2026",
    title: "Registration Opens",
    description: "Start your journey - Register your team and submit your innovative ideas",
    icon: Users,
    color: "primary",
  },
  {
    date: "Mar 8, 2026",
    title: "Round 1 Submission Deadline",
    description: "Final date to submit your project proposals and documentation",
    icon: Calendar,
    color: "accent",
  },
  {
    date: "Mar 13, 2026",
    title: "Shortlisted Teams Announcement",
    description: "Selected teams will be notified for the grand finale via mail",
    icon: CheckCircle,
    color: "secondary",
  },
  {
    date: "Mar 28, 2026",
    title: "Round 2 - Grand Finale",
    description: "In-person hackathon at PSG College of Technology, Coimbatore",
    icon: Trophy,
    color: "accent",
    highlight: true,
  },
];

export function Timeline() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-muted/30" id="dates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars and stay on track with these key milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -ml-px" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-6 w-8 h-8 md:w-12 md:h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                  <event.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <Card
                    className={`p-6 hover:shadow-lg transition-all duration-300 ${
                      event.highlight
                        ? "border-2 border-accent bg-accent/5"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-2">
                          {event.date}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              All times are in IST (Indian Standard Time)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
