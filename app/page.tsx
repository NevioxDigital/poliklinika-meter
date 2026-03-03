import Link from 'next/link';
import { 
  Activity, 
  HeartPulse, 
  Baby, 
  Stethoscope, 
  ChevronRight, 
  Phone, 
  Clock, 
  MapPin 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
              ✨ Vaše zdravlje na prvom mjestu
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground italic lg:leading-[1.1]">
              Vrhunska medicinska skrb u <span className="text-primary">srcu Splita</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Poliklinika Meter pruža sveobuhvatne specijalističke preglede uz najmoderniju dijagnostiku i tim vrhunskih stručnjaka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20">
                Naručite se na pregled
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg">
                Naše specijalnosti
              </Button>
            </div>
          </div>
        </div>
        
        {/* Dekorativni element u pozadini */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl opacity-50" />
      </section>

      {/* --- INFO CARDS (Quick Access) --- */}
      <section className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10">
          <Card className="border-none shadow-xl bg-primary text-primary-foreground">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Phone className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg">Hitni kontakt</CardTitle>
                <CardDescription className="text-primary-foreground/80">+385 21 123 456</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-xl bg-background border-border">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Radno vrijeme</CardTitle>
                <CardDescription>Pon - Pet: 08:00 - 20:00</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-xl bg-background border-border">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Lokacija</CardTitle>
                <CardDescription>Ulica XXXX 14, Split</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* --- SPECIALTIES PREVIEW --- */}
      <section className="container px-4 mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Naše specijalnosti</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            Pružamo širok spektar medicinskih usluga koristeći najnovije tehnologije i individualni pristup svakom pacijentu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Interna medicina', icon: Activity, desc: 'Sveobuhvatna dijagnostika unutarnjih organa.' },
            { title: 'Ginekologija', icon: Baby, desc: 'Potpuna skrb za zdravlje žena i trudnica.' },
            { title: 'Kardiologija', icon: HeartPulse, desc: 'Specijalistički pregledi i ultrazvuk srca.' },
            { title: 'Medicina rada', icon: Stethoscope, desc: 'Sistematski pregledi za vozače i radna mjesta.' },
          ].map((service, i) => (
            <Card key={i} className="group hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="#" className="text-sm font-semibold text-primary flex items-center">
                  Saznaj više <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center pt-8">
           <Button variant="ghost" className="text-muted-foreground hover:text-primary">
             Pogledajte sve usluge (10+)
           </Button>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="container px-4 mx-auto">
        <div className="bg-muted rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="space-y-4 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold italic">Trebate stručno mišljenje?</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Naš tim liječnika dostupan je za konzultacije i preglede u najkraćem mogućem roku.
            </p>
            <Button size="lg" className="rounded-full px-10">
              Nazovite nas odmah
            </Button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background rounded-2xl p-8 shadow-2xl">
               <div className="text-4xl font-bold text-primary mb-1">20+</div>
               <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Godina iskustva</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}