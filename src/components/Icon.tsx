type IconName =
  | "arrowRight"
  | "calendar"
  | "check"
  | "chevron"
  | "clipboard"
  | "file"
  | "menu"
  | "message"
  | "shield"
  | "swap"
  | "user"
  | "whatsapp";

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, ReactNode> = {
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  calendar: (
    <>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect width="18" height="18" x="3" y="4" rx="3" />
      <path d="m9 16 2 2 4-5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clipboard: (
    <>
      <path d="M9 5h6" />
      <path d="M9 12h6M9 16h4" />
      <path d="M8 3h8l1 3h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l1-3Z" />
    </>
  ),
  file: (
    <>
      <path d="M14 2v6h6" />
      <path d="M4 4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M8 13h8M8 17h6" />
    </>
  ),
  menu: <path d="M5 7h14M5 12h14M5 17h14" />,
  message: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4A8 8 0 1 1 21 12Z" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  swap: <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" />,
  user: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" />
      <path d="M9.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.1 1.3 1.5.6.5 1.2.8 1.5.9.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .8-.6 1.7-1.4 1.8-1.5.2-3.4-.6-5.1-2.2-1.7-1.6-2.6-3.5-2.4-5 .1-.4.2-.7.4-1Z" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
import type { ReactNode } from "react";
