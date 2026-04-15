import * as React from "react";

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & React.HTMLAttributes<HTMLElement>;

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
  children,
  duration = 0.9,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = "p",
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const [displayText, setDisplayText] = React.useState(children);
  const text = children;
  const onScrambleCompleteRef = React.useRef(onScrambleComplete);

  React.useEffect(() => {
    setDisplayText(children);
  }, [children]);

  React.useEffect(() => {
    onScrambleCompleteRef.current = onScrambleComplete;
  }, [onScrambleComplete]);

  React.useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayText(text);
      onScrambleCompleteRef.current?.();
      return;
    }

    const steps = Math.max(1, Math.floor(duration / speed));
    const intervalMs = Math.max(speed * 1000, 16);
    let step = 0;
    let cancelled = false;

    const interval = window.setInterval(() => {
      if (cancelled) {
        return;
      }

      let scrambled = "";
      const progress = step / steps;

      for (let index = 0; index < text.length; index += 1) {
        if (text[index] === " ") {
          scrambled += " ";
          continue;
        }

        if (progress * text.length > index) {
          scrambled += text[index];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step += 1;

      if (step > steps) {
        window.clearInterval(interval);
        setDisplayText(text);
        onScrambleCompleteRef.current?.();
      }
    }, intervalMs);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [characterSet, duration, speed, text, trigger]);

  return (
    <Component className={className} aria-label={text} {...props}>
      {displayText}
    </Component>
  );
}
