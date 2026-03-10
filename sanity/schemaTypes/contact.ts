import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Main Heading',
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      title: 'Sub-heading',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ctaLabel',
      type: 'string',
      title: 'Button Label',
      initialValue: 'Zatraži Termin',
    }),
  ],
})
