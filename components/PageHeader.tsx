"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  description: string;
  breadcrumb: string;
  icon?: React.ReactNode;
}

export default function PageHeader({ title, titleAccent, description, breadcrumb, icon }: PageHeaderProps) {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Startseite
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{breadcrumb}</span>
        </motion.nav>

        <div className="max-w-3xl">
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              {icon}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight mb-5"
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="italic text-primary">{titleAccent}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
