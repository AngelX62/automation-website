import * as React from "react";
import { motion } from "motion/react";

import { cn } from "./utils";

const ambientBorder =
  "conic-gradient(from 90deg at 50% 50%, rgba(249,248,246,0.04) 0deg, rgba(74,93,78,0.76) 78deg, rgba(249,248,246,0.88) 150deg, rgba(156,142,122,0.7) 232deg, rgba(249,248,246,0.04) 320deg, rgba(249,248,246,0.04) 360deg)";

const hoverGlow =
  "radial-gradient(78% 190% at 50% 50%, rgba(74,93,78,0.22) 0%, rgba(156,142,122,0.18) 42%, rgba(255,255,255,0) 100%)";

type HoverBorderGradientProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  containerClassName?: string;
  contentClassName?: string;
  duration?: number;
};

export const HoverBorderGradient = React.forwardRef<
  HTMLButtonElement,
  HoverBorderGradientProps
>(function HoverBorderGradient(
  {
    children,
    className,
    containerClassName,
    contentClassName,
    duration = 9.5,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onFocus,
    onBlur,
    ...props
  },
  ref,
) {
  const [hovered, setHovered] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement, []);

  const updatePointer = React.useCallback((clientX: number, clientY: number) => {
    const node = buttonRef.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    node.style.setProperty("--pointer-x", `${Math.min(Math.max(x, 0), 100)}%`);
    node.style.setProperty("--pointer-y", `${Math.min(Math.max(y, 0), 100)}%`);
  }, []);

  React.useEffect(() => {
    const node = buttonRef.current;
    if (!node) {
      return;
    }

    node.style.setProperty("--pointer-x", "50%");
    node.style.setProperty("--pointer-y", "50%");
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border border-white/8 bg-brand-dark/40 p-px shadow-[0_18px_44px_rgba(0,0,0,0.34)] backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:scale-[1.01] hover:bg-brand-dark/58 hover:border-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-60",
        containerClassName,
        className,
      )}
      onMouseEnter={(event) => {
        setHovered(true);
        updatePointer(event.clientX, event.clientY);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        buttonRef.current?.style.setProperty("--pointer-x", "50%");
        buttonRef.current?.style.setProperty("--pointer-y", "50%");
        onMouseLeave?.(event);
      }}
      onMouseMove={(event) => {
        updatePointer(event.clientX, event.clientY);
        onMouseMove?.(event);
      }}
      onFocus={(event) => {
        setHovered(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setHovered(false);
        onBlur?.(event);
      }}
      {...props}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[38%] rounded-full"
        style={{
          background: ambientBorder,
          filter: hovered ? "blur(8px)" : "blur(10px)",
        }}
        animate={{
          rotate: 360,
          opacity: hovered ? 0.92 : 0.66,
          scale: hovered ? 1.035 : 1,
        }}
        transition={{
          rotate: {
            duration: hovered ? Math.max(duration * 0.92, 8) : duration,
            ease: "linear",
            repeat: Infinity,
          },
          opacity: { duration: 0.32, ease: "easeOut" },
          scale: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: hoverGlow }}
        animate={{
          opacity: hovered ? 0.62 : 0.22,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[inherit]"
        style={{
          background:
            "radial-gradient(120px circle at var(--pointer-x,50%) var(--pointer-y,50%), rgba(249,248,246,0.18) 0%, rgba(74,93,78,0.22) 18%, rgba(156,142,122,0.18) 38%, rgba(255,255,255,0) 72%)",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.985,
        }}
        transition={{
          opacity: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(180deg,rgba(10,13,19,0.985),rgba(3,3,5,0.96))]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[radial-gradient(circle_at_50%_-18%,rgba(255,255,255,0.13),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0))]"
      />
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-3 rounded-[inherit] px-6 py-3 text-sm font-semibold text-brand-creme md:px-7 md:py-3.5 md:text-base",
          contentClassName,
        )}
      >
        {children}
      </span>
    </button>
  );
});
