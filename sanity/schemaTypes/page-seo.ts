// schemas/objects/seo.ts
import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Glavni naslov za Google (idealan izmedu 50-60 znakova)',
      validation: (Rule) => Rule.max(70).warning('Naslov je predugačak.'),
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Kratki opis koji se pojavljuje u rezultatima pretrage.',
      validation: (Rule) => Rule.max(160).warning('Opis bi trebao biti kraći od 160 znakova.'),
    }),
    defineField({
      name: 'image',
      title: 'Social Image (Open Graph)',
      type: 'image',
      description: 'Slika koja se prikazuje kada se link dijeli na Facebooku ili Instagramu.',
      options: {hotspot: true},
    }),
  ],
})
