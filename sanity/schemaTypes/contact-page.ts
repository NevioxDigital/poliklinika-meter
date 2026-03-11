import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
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
      name: 'formHeading',
      type: 'text',
      title: 'Form Heading',
    }),
    defineField({
      name: 'formParagraph',
      type: 'text',
      title: 'Form Paragraph',
    }),
  ],
})
