"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

export interface PerspectiveMarqueeProps {
  items?: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerSecond?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  "Vercel",
  "Linear",
  "Stripe",
  "Figma",
  "Notion",
  "Raycast",
  "Arc",
  "Cursor",
];

export function CompaniesList({
  items = DEFAULT_ITEMS,
  fontSize = 60,
  color = "#fafafa",
  fontWeight = 700,
  pixelsPerSecond = 120,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  background = "#050505",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const itemPadding = fontSize * 0.9;

  const approxItemWidth = items.reduce(
    (acc, item) => acc + item.length * fontSize * 0.6 + itemPadding,
    0
  );

  const rendered = [...items, ...items, ...items];

  const x = useMotionValue(0);

  useEffect(() => {
    const duration = approxItemWidth / (pixelsPerSecond * speed);

    x.set(0);

    const controls = animate(x, -approxItemWidth, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [approxItemWidth, pixelsPerSecond, speed, x]);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            x,
          }}
        >
          {rendered.map((item, i) => {
            const itemCenter =
              i * (approxItemWidth / items.length) +
              approxItemWidth / items.length / 2;

            const norm = (itemCenter - 640) / 640;
            const distance = Math.min(1, Math.abs(norm));

            return (
              <span
                key={`${item}-${i}`}
                style={{
                  display: "inline-block",
                  fontSize,
                  fontWeight,
                  color,
                  letterSpacing: "-0.03em",
                  paddingRight: itemPadding,
                //   filter: `blur(${distance * 2}px)`,
                  opacity: 1 - distance * 0.4,
                }}
              >
                {item}
              </span>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}