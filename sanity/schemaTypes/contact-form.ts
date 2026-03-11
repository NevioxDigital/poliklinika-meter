import {defineField, defineType} from 'sanity'

export const contactFormType = defineType({
  name: 'contactForm',
  title: 'Contact Form',
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
