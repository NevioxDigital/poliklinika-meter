import { ServiceDetailRow } from '@/components/service-detail-row';
import ContentWrapper from '@/components/ui/content-wrapper';

const medicinaRadaServices = [
  {
    title: 'Pregledi za zapošljavanje',
    description:
      'Liječnički pregled za utvrđivanje radne sposobnosti ključan je korak pri zasnivanju radnog odnosa, bez obzira radi li se o poslovima s posebnim uvjetima rada ili administrativnim radnim mjestima. Naša obrada uključuje opći klinički pregled, provjeru vida i sluha, laboratorijske pretrage krvi te, ovisno o zahtjevima radnog mjesta, specifične dijagnostičke postupke. Cilj pregleda je osigurati da zdravstveno stanje kandidata u potpunosti odgovara zahtjevima radnog mjesta, štiteći pritom zdravlje radnika i sigurnost radnog procesa.',
    image: '/images/services/zaposljavanje.jpg', // Putanja do slike
  },
  {
    title: 'Pregledi za vozače',
    description:
      'Provodimo sve vrste liječničkih pregleda za vozače svih kategorija (A, B, C, D, E), uključujući kandidate za autoškole, profesionalne vozače i vozače amatere kojima je potrebno produljenje vozačke dozvole. Pregled obuhvaća detaljnu provjeru oštrine vida, testiranje sluha, psihologijsko testiranje te opći medicinski pregled. Naš tim osigurava brzu i efikasnu obradu dokumentacije uz stručno savjetovanje o zdravstvenim uvjetima potrebnim za sigurnu i odgovornu vožnju u prometu na cestama.',
    image: '/images/services/vozaci.jpg', // Putanja do slike
  },
  {
    title: 'Pregled za oružje',
    description:
      'Liječnički pregled za utvrđivanje zdravstvene sposobnosti za držanje i nošenje oružja provodi se u skladu sa strogim zakonskim regulativama. Ovaj pregled uključuje detaljan klinički pregled, ispitivanje osjetila (vid i sluh), te opsežno psihologijsko testiranje koje provodi ovlašteni psiholog. Naša je obveza i cilj objektivno utvrditi emocionalnu stabilnost, odgovornost i opće zdravstveno stanje kako bi se osiguralo sigurno rukovanje vatrenim oružjem za osobne, lovačke ili profesionalne svrhe.',
    image: '/images/services/oruzje.jpg', // Putanja do slike
  },
  {
    title: 'Pregledi za sportaše',
    description:
      'Redoviti preventivni pregledi sportaša nezaobilazni su za sigurno bavljenje rekreativnim ili profesionalnim sportom. Pregled u našoj poliklinici uključuje fizikalni pregled, snimanje EKG-a u mirovanju, provjeru plućne funkcije te analizu općeg fizičkog razvoja. Posebnu pažnju posvećujemo ranom otkrivanju srčanih anomalija i procjeni izdržljivosti, kako bismo sportašima svih uzrasta omogućili maksimalan učinak na terenu uz minimalan rizik za zdravlje, te izdali službene potvrde o sposobnosti za natjecanja.',
    image: '/images/services/sportasi.jpg',
  },
];

export default function MedicinaRadaPage() {
  return (
    <section className="spacing-section">
      <ContentWrapper>
        <div className="max-w-4xl">
          <h1 className="mb-16 text-primary">Medicina Rada</h1>
          <p className="mb-8 text-foreground">
            Medicina rada u Poliklinici Meter fokusirana je na očuvanje zdravlja radno aktivnog
            stanovništva te osiguravanje sigurnog i produktivnog radnog okruženja. Pružamo
            profesionalne usluge utvrđivanja radne i opće zdravstvene sposobnosti uz strogo
            poštivanje zakonskih propisa i medicinskih standarda.
          </p>
          <p className="text-foreground">
            U našem radu koristimo najsuvremeniju dijagnostičku opremu, što nam omogućuje da u
            najkraćem mogućem roku provedemo sve potrebne pretrage i izdamo zakonski važeća
            uvjerenja. Individualan pristup i stručnost našeg tima jamče pacijentima brzu uslugu bez
            suvišnog čekanja.
          </p>
        </div>
        <div className="flex flex-col spacing-section-sm ">
          {medicinaRadaServices.map((service, index) => (
            <ServiceDetailRow
              key={service.title}
              {...service}
              reverse={index % 2 !== 0}
              isMedicinaRada
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}
