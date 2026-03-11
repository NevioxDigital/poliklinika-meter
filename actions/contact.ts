/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { z } from 'zod';

import { Resend } from 'resend';

//const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  firstName: z.string().min(1, 'Ime je obavezno'),
  lastName: z.string().min(1, 'Prezime je obavezno'),
  email: z.email('Neispravan email'),
  phone: z.string().min(6, 'Broj telefona je obavezan'),
  service: z.string().min(1, 'Odaberite uslugu'),
  // Checkboxes send "on" or are missing. We handle both.
  agreement: z.literal('on', {
    message: 'Morate prihvatiti uvjete',
  }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    agreement: formData.get('agreement'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.message || 'Provjerite polja.',
      success: false,
    };
  }
  return {
    message: 'Hvala vam! Poruka je uspješno poslana.',
    success: true,
  };
  /*
  try {
    // IMPORTANT: Ensure 'from' is a verified domain in your Resend dashboard
    await resend.emails.send({
      from: 'Poliklinika <onboarding@resend.dev>', // Use this for testing if no domain verified
      to: ['admin@poliklinika-meter.hr'],
      subject: `Novi upit: ${validatedFields.data.service}`,
      html: `
        <h3>Novi termin dogovoren</h3>
        <p><strong>Pacijent:</strong> ${validatedFields.data.firstName} ${validatedFields.data.lastName}</p>
        <p><strong>Usluga:</strong> ${validatedFields.data.service}</p>
        <p><strong>Telefon:</strong> ${validatedFields.data.phone}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
      `,
    });

    return { message: 'Hvala vam! Poruka je uspješno poslana.', success: true };
  } catch (e: any) {
    console.error('Resend Error:', e);
    return { message: 'Slanje nije uspjelo. Pokušajte opet.', success: false };
  }
    */
}
