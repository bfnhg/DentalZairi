"use client";

import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    ref.current.style.transform = `
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className={cn("perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={ref}
        className="relative transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-full rounded-3xl border border-white/20 bg-white shadow-xl",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(className)}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Tag>
  );
}
