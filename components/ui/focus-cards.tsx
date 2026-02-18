"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={card.link}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative border border-neutral-800 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer group",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {/* Background Image */}
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Text Content */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 z-10",
            hovered === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="text-lg font-semibold text-white">
            {card.title}
          </h3>

          <p className="mt-2 text-sm text-neutral-300 line-clamp-3">
            {card.description}
          </p>

          <span className="mt-3 text-xs text-indigo-400 font-medium">
            View Certificates →
          </span>
        </div>
      </div>
    </Link>
  )
);


Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description: string;
  link: string;
};


export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
