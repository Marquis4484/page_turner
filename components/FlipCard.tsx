"use client";

import Image from "next/image";
import React from "react";
import clsx from "clsx";
import styles from "./FlipCard.module.css";

type FlipCardProps = {
  frontSrc: string;
  backSrc: string;
  altFront?: string;
  altBack?: string;
  /** width/height of the *card* in pixels (wrapper). Defaults to 320×200 */
  width?: number;
  height?: number;
  /** Additional classes for the outer wrapper */
  className?: string;
  /** Rounded corners class (e.g., 'rounded-2xl') if using Tailwind */
  roundedClass?: string;
};

export default function FlipCard({
  frontSrc,
  backSrc,
  altFront = "Front of card",
  altBack = "Back of card",
  width = 320,
  height = 200,
  className,
  roundedClass = "rounded-2xl",
}: FlipCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const toggle = () => setFlipped((f) => !f);

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={clsx(
        "inline-block",
        styles.perspective,
        className
      )}
      style={{ width, height }}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label="Flip card"
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={clsx(
          "relative block h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
          roundedClass,
          styles.card,
          flipped && styles.flipped,
          prefersReducedMotion && styles.noMotion,
          // optional flair
          "shadow-lg"
        )}
      >
        {/* FRONT */}
        <div className={clsx("absolute inset-0", roundedClass, styles.face)}>
          <Image
            src={frontSrc}
            alt={altFront}
            fill
            sizes={`${width}px`}
            className={clsx("object-cover", roundedClass)}
            priority
          />
        </div>

        {/* BACK */}
        <div
          className={clsx(
            "absolute inset-0",
            roundedClass,
            styles.face,
            styles.back
          )}
        >
          <Image
            src={backSrc}
            alt={altBack}
            fill
            sizes={`${width}px`}
            className={clsx("object-cover", roundedClass)}
          />
        </div>
      </button>
    </div>
  );
}

/** Hook: prefers-reduced-motion media query */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);
  return reduced;
}
