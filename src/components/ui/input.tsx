import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-navy-900">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          "w-full rounded-lg border px-4 py-3 text-base transition-all duration-200",
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
      {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  )
);

Input.displayName = "Input";
export { Input };
