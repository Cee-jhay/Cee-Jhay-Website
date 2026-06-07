export type ContactInfo = {
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  x?: string;
  telegram?: string;
};

export const contact: ContactInfo = {
  name: "Cee-Jhay",
  email: "ceejh4yy@gmail.com",
  x: "https://x.com/Cee_jh4y",
  telegram: "https://t.me/Cee_jh4y",
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  external?: boolean;
};

export function getContactLinks(): ContactLink[] {
  const links: ContactLink[] = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
  ];

  if (contact.phone) {
    links.push({
      label: "Phone",
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
      value: contact.phone,
    });
  }

  if (contact.linkedin) {
    links.push({
      label: "LinkedIn",
      href: contact.linkedin,
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      external: true,
    });
  }

  if (contact.x) {
    links.push({
      label: "X",
      href: contact.x,
      value: contact.x.replace(/^https?:\/\/(www\.)?/, ""),
      external: true,
    });
  }

  if (contact.telegram) {
    links.push({
      label: "Telegram",
      href: contact.telegram,
      value: contact.telegram.replace(/^https?:\/\/(www\.)?/, ""),
      external: true,
    });
  }

  return links;
}
