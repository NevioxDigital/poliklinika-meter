import {defineField, defineType} from 'sanity'
import {simpleBlockMembers, richBlockMembers} from './blocks'

export const homeType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({name: 'seo', type: 'seo'}),
        defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
        defineField({name: 'subtitle', type: 'array', of: richBlockMembers}),
        {name: 'image', type: 'image', options: {hotspot: true}},
        {name: 'cta1', type: 'string'},
        {name: 'cta2', type: 'string'},
      ],
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features Bar',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'},
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description: 'Use: Stethoscope, Clock, ShieldCheck, Users, MapPin, etc.',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'servicesLanding',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
        defineField({name: 'description', type: 'array', of: richBlockMembers}),
      ],
    }),
    defineField({
      name: 'whyUs',
      type: 'object',
      fields: [
        {name: 'badge', type: 'string'},
        defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
        defineField({name: 'description', type: 'array', of: richBlockMembers}),
        {name: 'points', type: 'array', of: [{type: 'string'}]},
        {name: 'bgImage', type: 'image'},
        {name: 'cta', type: 'string'},
      ],
    }),
    // schemas/homePage.ts

    defineField({
      name: 'contactSection',
      type: 'object',
      title: 'Contact Section',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'array',
          of: simpleBlockMembers,
        }),
        defineField({
          name: 'paragraph',
          title: 'Paragraph',
          type: 'array',
          of: richBlockMembers,
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
  ],
})
