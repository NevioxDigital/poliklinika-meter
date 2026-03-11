import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zhwt7a92',
  dataset: 'production',
  useCdn: false,
  token:
    'skxmmYf08FezQOr2INEb9I3VfiIaWYNgEtCcWkpkjaw5xB0asBXjy0a3sjxiU0Ui51ZCznhIoD6EDeqCew10jDUXfpCLG6U2ke4r0eh3DlYt37YF6dgyiCdyRHgASC61mbwHJuJnUn853lbMTyDvJVAM6tTC36steZycVVTrdRCZv5xdWqO6',
  apiVersion: '2023-05-03',
});

const doctors = [
  { name: 'Maja Radman', title: 'prof. dr. sc.', department: 'Endokrinologija' },
  { name: 'Ante Mršić', title: 'dr. med.', department: 'Ginekologija' },
  { name: 'Dijana Perković', title: 'doc. dr. sc.', department: 'Imunologija' },
  { name: 'Ivica Vuković', title: 'prof. dr. sc.', department: 'Kardiologija' },
  { name: 'Branko Marinović', title: 'prof. dr. sc.', department: 'Kardiologija' },
  { name: 'Antonija Đuzel', title: 'dr. med.', department: 'Kirurgija' },
  { name: 'Nenad Ilić', title: 'prof. dr. sc.', department: 'Kirurgija' },
  { name: 'Marko Ajduk', title: 'doc. dr. sc.', department: 'Kirurgija' },
  { name: 'Josip Meter', title: 'dr. med.', department: 'Nefrologija' },
  { name: 'Anton Marović', title: 'dr. sc.', department: 'Neurologija' },
  { name: 'Dario Radović', title: 'dr. med.', department: 'Nuklearna medicina' },
  { name: 'Bruno Luetić', title: 'dr. med.', department: 'Ortopedija' },
  { name: 'Mirko Kontić', title: 'doc. dr. sc.', department: 'Otorinolaringologija' },
  { name: 'Boran Uglješić', title: 'doc. dr. sc.', department: 'Psihijatrija' },
  { name: 'Ivan Gudelj', title: 'doc. dr. sc.', department: 'Pulmologija' },
  { name: 'Neven Vrsalović', title: 'dr. med.', department: 'Urologija' },
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/č/g, 'c')
    .replace(/ć/g, 'c')
    .replace(/ž/g, 'z')
    .replace(/š/g, 's')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, '-');
}

async function resetAndMigrateDoctors() {
  try {
    console.log('🗑️ Deleting existing doctors...');

    await client.delete({ query: '*[_type == "doctor"]' });

    console.log('🩺 Creating doctors...');

    for (const doctor of doctors) {
      const id = `doctor-${createSlug(doctor.name)}`;

      const doc = {
        _id: id,
        _type: 'doctor',
        name: doctor.name,
        title: doctor.title,
        department: doctor.department,
      };

      await client.createOrReplace(doc);

      console.log(`✅ Created doctor: ${doctor.name}`);
    }

    console.log('\n✨ Doctor migration completed successfully!');
  } catch (err) {
    console.error('\n❌ Migration failed:', err.message);
  }
}

resetAndMigrateDoctors();
