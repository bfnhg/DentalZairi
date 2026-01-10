"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient<T extends React.ElementType = "button">({
  children,
  containerClassName,
  className,
  as,
  duration = 1,
  clockwise = true,
  ...props
}: {
  as?: T;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const Tag = as || "button";

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #2fb6d4 0%, rgba(47, 182, 212, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #2fb6d4 0%, rgba(47, 182, 212, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #2fb6d4 0%, rgba(47, 182, 212, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #2fb6d4 0%, rgba(47, 182, 212, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #2fb6d4 0%, rgba(47, 182, 212, 0.3) 50%, rgba(47, 182, 212, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center items-center justify-center overflow-hidden p-[3px] transition-all duration-500",
        "hover:shadow-[0_0_30px_rgba(47,182,212,0.5)]",
        containerClassName
      )}
      {...props}
    >
      {/* Gradient animé en arrière-plan */}
      <motion.div
        className="absolute inset-0 z-0 rounded-full"
        style={{
          filter: "blur(8px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      {/* Bordure de gradient statique */}
      <div className="absolute inset-0 z-[1] rounded-full bg-gradient-to-r from-[#2fb6d4] via-[#1a8fa3] to-[#0F4C5C] opacity-80" />

      {/* Background noir pour créer l'effet de bordure */}
      <div className="absolute inset-[2px] z-[2] rounded-full bg-gradient-to-br from-gray-900 to-black" />

      {/* Contenu du bouton */}
      <div
        className={cn(
          "relative z-10 w-full text-white py-4 px-6 rounded-full bg-gradient-to-r from-[#2fb6d4] to-[#0F4C5C] font-bold text-lg shadow-xl text-center",
          "hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",
          "flex items-center justify-center gap-2",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}