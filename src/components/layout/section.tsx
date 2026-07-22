import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
  gold?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  dark,
  gold,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark && "bg-navy-900 text-white",
        gold && "bg-gold-50",
        !dark && !gold && "bg-white",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className,
  light,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12 md:mb-16", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", light ? "text-white" : "text-navy-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg", light ? "text-white/80" : "text-gray-600")}>
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
    </div>
  );
}
