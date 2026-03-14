/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { CheckCircle2, Loader2 } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

import { useActionState } from 'react';

import { handleContactForm } from '@/actions/contact';
import { SanityContent } from '@/components/sanity-content';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContactSectionProps {
  image?: string | StaticImageData;
  services?: string[];
  heading?: any; // Changed from string to any (Portable Text)
  paragraph?: any; // Changed from string to any (Portable Text)
}

const initialState = { message: '', success: false };

export const ContactSection = ({ image, services, heading, paragraph }: ContactSectionProps) => {
  const [state, formAction, pending] = useActionState(handleContactForm, initialState);

  return (
    <section className="flex items-center justify-center py-12 md:py-20">
      <div
        className={`container shadow-2xl shadow-primary/30 rounded-2xl border border-primary/5 w-full bg-background/80 p-6 md:p-12 lg:p-20 grid items-center gap-12 ${
          image ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'
        }`}
      >
        {/* LEFT SIDE: Image */}
        {image && (
          <div className="hidden lg:flex items-center justify-center h-full">
            <div className="relative w-full aspect-4/5 shadow-2xl rounded-[2rem] overflow-hidden">
              <Image src={image} alt="Kontakt" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </div>
        )}

        {/* RIGHT SIDE: Form Content */}
        <div className="flex flex-col">
          <header className="mb-10 text-left space-y-4">
            {/* FIX: Use SanityContent instead of rendering the object directly */}
            <h3 className="text-3xl md:text-4xl font-black tracking-tight">
              <SanityContent value={heading} />
            </h3>

            <div className="text-foreground text-sm md:  leading-relaxed">
              <SanityContent value={paragraph} />
            </div>
          </header>

          {state.success ? (
            <div className="p-10 rounded-2xl bg-primary/5 text-center animate-in fade-in zoom-in duration-500 border border-primary/10">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Uspješno poslano!</h3>
              <p className="text-muted-foreground">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Ime
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Ivan"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Prezime
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Horvat"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ivan.horvat@email.com"
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Telefon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="091 234 5678"
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              {services && services.length > 0 && (
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Usluga
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="h-12 rounded-xl w-full">
                      <SelectValue placeholder="Odaberite vrstu pregleda" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="agreement" name="agreement" required className="mt-1" />
                <Label
                  htmlFor="agreement"
                  className="text-[11px] leading-snug text-muted-foreground cursor-pointer"
                >
                  Slažem se s uvjetima korištenja i obradom osobnih podataka u svrhu naručivanja
                  termina sukladno GDPR regulativi.
                </Label>
              </div>

              {state.message && !state.success && (
                <p className="text-destructive text-xs font-semibold bg-destructive/5 p-4 rounded-xl border border-destructive/10">
                  {state.message}
                </p>
              )}

              <Button
                disabled={pending}
                type="submit"
                className="w-full h-14 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]"
              >
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Slanje zahtjeva...
                  </>
                ) : (
                  'Zatraži Termin Pregleda'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
