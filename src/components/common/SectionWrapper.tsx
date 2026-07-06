import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionWrapper({
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden py-32">
      {children}
    </section>
  );
}