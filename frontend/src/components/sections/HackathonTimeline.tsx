"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Video, Github, FileText, Building, Users, MapPin } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "../../lib/utils";

export function HackathonTimeline() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hackathon Structure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two rounds to showcase your innovation and compete for exciting prizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Round I */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Round I – Preliminary Round
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Requirements
                  </h4>
                  <ul className="space-y-3 ml-7">
                    <li className="text-muted-foreground">
                      Working PoC with TRL Level 3 or above
                    </li>
                    <li className="text-muted-foreground">
                      Project PPT explaining your solution
                    </li>
                    <li className="text-muted-foreground">
                      GitHub repository link with code
                    </li>
                    <li className="text-muted-foreground">
                      Demo video URL showcasing your PoC
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Evaluation Criteria
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="text-muted-foreground">
                      • Project PPT quality and clarity
                    </li>
                    <li className="text-muted-foreground">
                      • GitHub code quality and documentation
                    </li>
                    <li className="text-muted-foreground">
                      • Demo video clarity and presentation
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Round II */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           <Card className="h-full p-8 border-2 border-accent/20 bg-accent/5 relative overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
  
  <div className="relative">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
        <span className="text-white font-bold">2</span>
      </div>
      <h3 className="text-2xl font-bold text-accent">
        Round II – Grand Finale
      </h3>
    </div>

    {/* Centered Venue Card */}
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border-2 border-accent/30 shadow-lg max-w-md w-full max-h-4xl">
        <div className="text-center space-y-4 min-h-[200px] flex  flex-col items-center justify-center">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-2">
            <Building className="w-8 h-8 text-accent" />
          </div> */}
          {/* <p className="text-sm font-medium text-accent/80 uppercase tracking-wide mb-3">
            Venue
          </p> */}
          <h4 className="text-2xl font-bold text-foreground mb-4">
            PSG College of Technology
          </h4>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <p className="text-sm">Peelamedu, Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

