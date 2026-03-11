import {
  // New Services Icons
  Activity,
  Baby,
  Bone,
  Brain,
  Car,
  ClipboardList,
  Clock,
  Crosshair,
  Heart,
  HelpCircle,
  Radiation,
  ShieldCheck,
  // Existing Features Icons
  Stethoscope,
  Syringe,
  Trophy,
  UserRound,
  Users,
  Wind,
} from 'lucide-react';

export const IconMap = {
  // Features
  Stethoscope,
  Clock,
  ShieldCheck,
  Users,
  // Specialties
  Activity,
  Baby,
  Heart,
  Brain,
  Bone,
  Syringe,
  UserRound,
  Wind,
  Radiation,
  // Medicina Rada
  ClipboardList,
  Car,
  Crosshair,
  Trophy,
} as const;

export type IconName = keyof typeof IconMap;

export const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const Icon = IconMap[name as IconName] || HelpCircle;
  return <Icon className={className} />;
};
