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
    primary: "bg-gradient-to-b from-orange-500 to-orange-600 text-white border border-orange-400/30 shadow-[0_0_20px_rgba(249,115,22,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-orange-400 hover:to-orange-500 animate-[btn-glow_3s_ease-in-out_infinite]",
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
