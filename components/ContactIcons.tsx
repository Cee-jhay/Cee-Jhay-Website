import { contact } from "@/lib/contact";

type IconProps = {
  size?: number;
};

export function EmailIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function XIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TelegramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type ContactIconLinksProps = {
  size?: number;
  className?: string;
};

export function ContactIconLinks({ size = 20, className = "" }: ContactIconLinksProps) {
  const linkClass =
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-opacity hover:opacity-70 active:opacity-50";
  const linkStyle = { color: "var(--color-text-secondary)" };

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-5 ${className}`}>
      <a
        href={`mailto:${contact.email}`}
        aria-label="Email"
        className={linkClass}
        style={linkStyle}
      >
        <EmailIcon size={size} />
      </a>
      {contact.x && (
        <a
          href={contact.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className={linkClass}
          style={linkStyle}
        >
          <XIcon size={size} />
        </a>
      )}
      {contact.telegram && (
        <a
          href={contact.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className={linkClass}
          style={linkStyle}
        >
          <TelegramIcon size={size} />
        </a>
      )}
      {contact.linkedin && (
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
          style={linkStyle}
        >
          <LinkedInIcon size={size} />
        </a>
      )}
    </div>
  );
}
