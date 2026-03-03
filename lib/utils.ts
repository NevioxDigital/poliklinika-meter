import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const trimTitle = (text?: string, limit: number = 60) => {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.substring(0, limit - 3) + '...';
};

export const trimDescription = (text?: string, limit: number = 155) => {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.substring(0, limit - 3) + '...';
};
