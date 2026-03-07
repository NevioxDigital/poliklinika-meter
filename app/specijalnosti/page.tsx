import { ServiceDetailRow } from '@/components/service-detail-row';
import ContentWrapper from '@/components/ui/content-wrapper';

const specialtyServices = [
  {
    title: 'Interna medicina',
    description:
      'Internistički pregled temelj je svake ozbiljne medicinske obrade i ključan je za očuvanje općeg zdravlja. Naši specijalisti internisti provode detaljnu analizu stanja svih unutarnjih organa, uključujući srce, pluća, probavni sustav i endokrine žlijezde. Poseban naglasak stavljamo na ranu detekciju metaboličkih poremećaja poput dijabetesa i povišenog krvnog tlaka, pružajući pacijentima cjelovit uvid u njihovo zdravstveno stanje uz izradu individualnog plana liječenja i redovito praćenje kroničnih bolesnika.',
    image: '/images/services/interna.jpg',
  },
  {
    title: 'Ginekologija',
    description:
      'Pružamo sveobuhvatnu ginekološku skrb prilagođenu svakoj fazi života žene – od savjetovanja u ranoj mladosti do stručnog praćenja menopauze. Naše usluge uključuju sistematske preglede, preciznu ultrazvučnu dijagnostiku s kolor doplerom, uzimanje Papa testova za ranu detekciju karcinoma grlića maternice te kompletnu obradu vezanu uz planiranje obitelji i praćenje trudnoće. Naš stručni tim osigurava sigurno, diskretno i ugodno okruženje uz primjenu najmodernijih dijagnostičkih standarda.',
    image: '/images/services/ginekologija.jpg',
  },
  {
    title: 'Kardiologija',
    description:
      'Kardiološka ambulanta Poliklinike Meter nudi cjelovit pristup prevenciji, dijagnostici i liječenju bolesti kardiovaskularnog sustava. Koristimo vrhunsku opremu za snimanje EKG-a, ultrazvuk srca s preciznim prikazom protoka krvi te dugotrajni monitoring srčanog ritma i krvnog tlaka (Holter). Naš cilj je rana identifikacija rizika od srčanog udara i zatajenja srca, uz stručno vođenje terapije za pacijente s aritmijama, povišenim tlakom ili tegobama uzrokovanim bolestima srčanih zalistaka.',
    image: '/images/services/kardiologija.jpg',
  },
  {
    title: 'Neurologija',
    description:
      'Neurologija se bavi dijagnostikom i liječenjem kompleksnih poremećaja središnjeg i perifernog živčanog sustava. Specijalizirani smo za obradu kroničnih glavobolja, vrtoglavica, bolnih stanja kralježnice te prepoznavanje ranih znakova cerebrovaskularnih bolesti. Uz detaljan klinički pregled i analizu simptoma, pomažemo pacijentima s poremećajima spavanja, epilepsijom ili kognitivnim poteškoćama, primjenjujući suvremene terapijske protokole za poboljšanje neurološke funkcije i opće kvalitete života.',
    image: '/images/services/neurologija.jpg',
  },
  {
    title: 'Ortopedija',
    description:
      'U našoj ortopedskoj ambulanti rješavamo širok spektar tegoba vezanih uz sustav za kretanje – od degenerativnih bolesti zglobova poput artroza do sportskih ozljeda ligamenata i tetiva. Provodimo detaljne preglede kralježnice, ramena, kuka i koljena uz ultrazvučnu dijagnostiku lokomotornog sustava. Naš pristup uključuje preporuke za fizikalnu terapiju, intraartikularne injekcije za ublažavanje bolova (blokade) te stručne konzultacije oko potrebe za operativnim zahvatima i postoperativne rehabilitacije.',
    image: '/images/services/ortopedija.jpg',
  },
  {
    title: 'Kirurgija',
    description:
      'Specijalistički kirurški pregledi u Poliklinici Meter namijenjeni su pacijentima koji trebaju stručno mišljenje o potrebi za operacijom ili obradu specifičnih kirurških stanja. Uz konzultacije, izvodimo i male kirurške zahvate u lokalnoj anesteziji, poput uklanjanja madeža, lipoma, ateroma i drugih kožnih promjena. Svaki zahvat provodi se uz maksimalnu pažnju na estetski ishod i uz detaljne upute o postoperativnom zbrinjavanju rane, osiguravajući brz i siguran oporavak pacijenta.',
    image: '/images/services/kirurgija.jpg',
  },
  {
    title: 'Urologija',
    description:
      'Urologija u našoj poliklinici nudi kompletnu obradu bolesti mokraćnog sustava za muškarce i žene, s posebnim fokusom na zdravlje prostate kod muškaraca svih dobi. Pružamo usluge ranog otkrivanja karcinoma prostate, dijagnostiku i liječenje kamenaca u bubrezima i mjehuru te rješavanje učestalih infekcija urinarnog trakta. Uz primjenu ultrazvuka mjehura i bubrega te urološkog pregleda prostate, osiguravamo brzu i preciznu dijagnostiku uz maksimalnu diskreciju i individualan pristup svakom pacijentu.',
    image: '/images/services/urologija.jpg',
  },
  {
    title: 'Pulmologija',
    description:
      'Pulmološka obrada ključna je za pacijente s respiratornim tegobama poput dugotrajnog kašlja, otežanog disanja ili alergijskih manifestacija. Naši specijalisti bave se dijagnostikom astme, kronične opstruktivne bolesti pluća (KOPB) te post-covid sindroma koji često zahvaća dišne puteve. Provodimo testove plućne funkcije (spirometriju) i preporučujemo ciljanu inhalacijsku terapiju kako bismo pacijentima omogućili slobodno disanje i spriječili daljnje oštećenje plućnog tkiva.',
    image: '/images/services/pulmologija.jpg',
  },
  {
    title: 'Psihijatrija',
    description:
      'Očuvanje mentalnog zdravlja neizostavan je dio opće dobrobiti organizma. Naša psihijatrijska ambulanta nudi siguran i povjerljiv prostor za stručnu pomoć kod stanja poput anksioznosti, depresije, stresa izazvanog poslom ili privatnim promjenama, te poremećaja prilagodbe. Naši stručnjaci kombiniraju empatiju, suvremene psihoterapijske tehnike i, po potrebi, farmakoterapiju kako bi pacijentima pomogli u ponovnom postizanju emocionalne ravnoteže i prevladavanju životnih kriza.',
    image: '/images/services/psihijatrija.jpg',
  },
  {
    title: 'Radiologija',
    description:
      'Radiološka dijagnostika, primarno usmjerena na vrhunske ultrazvučne preglede, nezaobilazan je korak u postavljanju točne dijagnoze. Poliklinika Meter opremljena je suvremenim uređajima za ultrazvuk abdomena, štitnjače, dojki i mekih tkiva. Naši radiolozi pružaju stručna i detaljna očitanja nalaza te daju precizne smjernice za daljnju obradu, omogućujući liječnicima drugih specijalnosti da temelje svoje odluke na jasnim i pouzdanim slikovnim prikazima pacijentovog tijela.',
    image: '/images/services/radiologija.jpg',
  },
];

export default function SpecijalnostiPage() {
  return (
    <section className="spacing-section">
      <ContentWrapper>
        <div className="max-w-4xl">
          <h1 className="mb-16 text-primary">Specijalnosti</h1>
          <p className="mb-8 text-foreground">
            U našoj poliklinici pružamo širok spektar specijalističkih pregleda i medicinskih usluga
            s ciljem pravovremene dijagnostike, prevencije i liječenja različitih zdravstvenih
            stanja. Naš tim iskusnih liječnika specijalista koristi suvremenu medicinsku opremu i
            individualan pristup svakom pacijentu kako bi osigurao visoku razinu zdravstvene skrbi.
          </p>
          <p className="text-foreground">
            U ugodnom i profesionalnom okruženju pacijentima omogućujemo brzu i pouzdanu
            dijagnostiku, detaljne specijalističke konzultacije te preporuke za daljnje liječenje i
            praćenje zdravstvenog stanja.
          </p>
        </div>
        <div className="flex flex-col spacing-section-sm ">
          {specialtyServices.map((service, index) => (
            <ServiceDetailRow key={service.title} {...service} reverse={index % 2 !== 0} />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}
