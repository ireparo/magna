import data from "../../content/contact.json";

export const WHATSAPP_NUMBER = data.whatsapp_number;
export const PHONE_DISPLAY = data.phone_display;
export const EMAIL = data.email;
export const ADDRESS = data.address;
export const HOURS = data.hours;

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:+${WHATSAPP_NUMBER}`;
}
