import { Clock, ShieldCheck, Stethoscope, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: 'Vrhunska Dijagnostika',
    description: 'Najmodernija medicinska oprema za precizne rezultate.',
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: 'Brzi Termini',
    description: 'Pregledi bez čekanja, dogovoreni u najkraćem roku.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Sigurnost i Povjerenje',
    description: 'Vaše zdravlje je u rukama licenciranih stručnjaka.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Stručni Tim',
    description: 'Tim iskusnih liječnika specijalista iz raznih područja.',
  },
];

export const FeaturesBar = () => {
  return (
    <section className="my-16 md:my-24 lg:my-32 bg-primary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none ring-transparent bg-transparent group">
              <CardContent className="flex flex-col items-center text-center p-6">
                {/* Icon Wrapper */}
                <div className="mb-4 p-3 rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-background">{feature.title}</h3>
                <p className="text-sm text-background/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
