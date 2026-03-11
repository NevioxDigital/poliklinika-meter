'use client';

import { CheckCircle2, Loader2 } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

import { useActionState } from 'react';

import { handleContactForm } from '@/actions/contact';
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
  heading?: string;
  paragraph?: string;
}

const initialState = { message: '', success: false };

export const ContactSection = ({
  image,
  services,
  heading = 'Rezerviraj termin',
  paragraph = 'Vaše zdravlje je naš prioritet.',
}: ContactSectionProps) => {
  const [state, formAction, pending] = useActionState(handleContactForm, initialState);

  return (
    <section className="flex items-center justify-center py-20">
      <div
        className={`container shadow-xl shadow-primary/30 rounded-xl border border-primary/10 w-full min-h-[50vh] h-auto p-20 grid items-center ${
          image ? 'lg:grid-cols-2' : 'max-w-4xl px-4'
        }`}
      >
        {/* LEFT SIDE: Centered and Smaller Image */}
        {image && (
          <div className="hidden lg:flex items-center justify-center h-full">
            <div className="relative w-4/5 aspect-4/5 shadow-xl rounded-xl overflow-hidden">
              <Image src={image} alt="Kontakt" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-primary/10 backdrop-brightness-95" />
            </div>
          </div>
        )}

        {/* RIGHT SIDE: Form Content */}
        <div className="flex items-center justify-center">
          <div className="w-full rounded-xl">
            <header className="mb-6 text-left">
              <h2 className="text-3xl font-extrabold text-black mb-2">{heading}</h2>
              <p className="text-foreground text-sm italic">{paragraph}</p>
            </header>

            {state.success ? (
              <div className="p-8 rounded-xl text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-1">Uspješno!</h3>
                <p className="text-muted-foreground text-sm">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="firstName"
                      className="text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Ime
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Ivan"
                      required
                      className="rounded-xl bg-background"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="lastName"
                      className="text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Prezime
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Horvat"
                      required
                      className="rounded-xl bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivan@mail.com"
                    required
                    className="rounded-xl bg-background"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+385 91..."
                    required
                    className="rounded-xl bg-background"
                  />
                </div>

                {services && services.length > 0 && (
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="service"
                      className="text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      Usluga
                    </Label>
                    <Select name="service" required>
                      <SelectTrigger className="rounded-xl bg-background w-1/2">
                        <SelectValue placeholder="Odaberite vrstu pregleda" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {services.map((s) => (
                          <SelectItem key={s} value={s} className="focus:bg-primary/30">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex items-start space-x-3 p-3 ">
                  <Checkbox
                    id="agreement"
                    name="agreement"
                    required
                    className="mt-1 rounded-sm bg-background"
                  />
                  <Label
                    htmlFor="agreement"
                    className="text-xs leading-tight text-foreground cursor-pointer mt-1"
                  >
                    Slažem se s uvjetima korištenja i obradom osobnih podataka u svrhu naručivanja
                    termina.
                  </Label>
                </div>

                {state.message && !state.success && (
                  <p className="text-destructive text-xs font-semibold bg-destructive/5 p-3 rounded-xl border border-destructive/10">
                    {state.message}
                  </p>
                )}

                <Button
                  disabled={pending}
                  type="submit"
                  size="lg"
                  variant="outline"
                  className="w-full h-12 rounded-xl border border-primary/60 text-md text-primary hover:bg-primary hover:text-background font-bold shadow-md transition-all"
                >
                  {pending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Slanje...
                    </>
                  ) : (
                    'Zatraži Termin'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
