import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-navy-900">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={cn(
          "w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 min-h-[120px] resize-y",
          "focus:outline-none focus:ring-2 focus:ring-navy-900/50",
          "placeholder:text-gray-400",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
            : "border-gray-300 focus:border-navy-900",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
);

Textarea.displayName = "Textarea";
export { Textarea };
