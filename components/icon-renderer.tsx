import { Clock, HelpCircle, ShieldCheck, Stethoscope, Users } from 'lucide-react';

export const IconMap = {
  Stethoscope,
  Clock,
  ShieldCheck,
  Users,
} as const;

export type IconName = keyof typeof IconMap;

export const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  // Look up the icon, fallback to HelpCircle if not found
  const Icon = IconMap[name as IconName] || HelpCircle;
  return <Icon className={className} />;
};
