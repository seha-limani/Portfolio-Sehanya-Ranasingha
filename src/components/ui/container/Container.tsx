import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={cn("page-container", className)}>{children}</div>
  );
}
