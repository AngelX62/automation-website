export function Logo({
  className = "w-6 h-6",
  variant = "structural",
  id,
}: {
  className?: string;
  variant?: "structural" | "draftsman" | "folded" | "plumb";
  id?: string;
}) {
  if (variant === "draftsman") {
    return (
      <svg
        id={id}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3" y1="22" x2="14" y2="0" />
        <line x1="21" y1="22" x2="10" y2="0" />
        <line x1="4" y1="14" x2="20" y2="14" />
      </svg>
    );
  }

  if (variant === "folded") {
    return (
      <svg
        id={id}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="miter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 22L12 2L22 22H16.5L12 12L7.5 22H2Z" />
      </svg>
    );
  }

  if (variant === "plumb") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 22L12 2L20 22" />
        <line x1="8" y1="14" x2="16" y2="14" />
        <line x1="12" y1="0" y2="24" x2="12" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    );
  }

  return (
    <svg
      id={id}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 22L12 2L22 22" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M7.5 12L12 21L16.5 12" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
