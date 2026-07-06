import type { ReactNode } from "react";

import Container from "../ui/container/Container";
import { cn } from "../../lib/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export default function Section({
  id,
  children,
  className,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section scroll-offset",
        variant === "muted" && "section-muted",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
