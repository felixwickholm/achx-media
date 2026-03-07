"use client";

import { openCalBooking } from "@/lib/utils";

interface BookCallButtonProps {
  variant?: "primary" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export default function BookCallButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
}: BookCallButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full cursor-pointer whitespace-nowrap transition-all duration-300";

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:bg-indigo-400",
    light: "bg-white text-[#08090a] btn-cta-light",
  };

  return (
    <button
      onClick={openCalBooking}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children ?? "Book a Free Call"}
    </button>
  );
}
