import { Clock, ShieldCheck, Stethoscope, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import ContentWrapper from '@/components/ui/content-wrapper';

const features = [
  {
    icon: Stethoscope,
    title: 'Vrhunska Dijagnostika',
    description: 'Najmodernija medicinska oprema za precizne rezultate.',
  },
  {
    icon: Clock,
    title: 'Brzi Termini',
    description: 'Pregledi bez čekanja, dogovoreni u najkraćem roku.',
  },
  {
    icon: ShieldCheck,
    title: 'Sigurnost i Povjerenje',
    description: 'Vaše zdravlje je u rukama licenciranih stručnjaka.',
  },
  {
    icon: Users,
    title: 'Stručni Tim',
    description: 'Tim iskusnih liječnika specijalista iz raznih područja.',
  },
];

export const FeaturesBar = () => {
  return (
    /* Added pt-12 to create space for the card to pop into */
    <section className="mt-16 md:mt-24 lg:mt-32 bg-background/90 shadow-md relative border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative border-none ring-transparent shadow-none bg-transparent transition-all duration-300 ease-in-out 
                         group cursor-pointer
                         hover:-translate-y-12 hover:bg-primary hover:shadow-2xl z-10 hover:z-20"
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                {/* Icon Wrapper */}
                <div className="mb-4 p-3 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-background transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-background transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground group-hover:text-background/95 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Optional "Deck" detail: A small indicator that only shows on hover */}
                <div className="h-1 w-0 group-hover:w-12 bg-white/50 transition-all duration-500 mt-4 rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
