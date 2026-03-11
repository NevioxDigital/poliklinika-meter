import {defineField, defineType} from 'sanity'

export const doctorType = defineType({
  name: 'doctor',
  title: 'Doctors',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'title', type: 'string', title: 'Title (e.g., dr. med.)'}),
    defineField({
      name: 'department',
      type: 'string',
      title: 'Department / Specialization',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
  ],
})
