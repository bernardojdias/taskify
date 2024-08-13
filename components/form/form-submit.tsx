"use client";

import { useFormStatus } from "react-dom";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: ButtonProps["variant"];
}

export const FormSubmit = ({
  children,
  variant = "primary",
  className,
  disabled,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="sm"
      variant={variant}
      disabled={pending || disabled}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
