import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO SECTION
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      fields: [
        {name: 'title', type: 'string', title: 'Main Title'},
        {name: 'highlightedText', type: 'string', title: 'Colored Text (e.g. Imotskog)'},
        {name: 'subtitle', type: 'text'},
        {name: 'image', type: 'image', options: {hotspot: true}},
        {name: 'cta1', type: 'string'},
        {name: 'cta2', type: 'string'},
      ],
    }),

    // FEATURES BAR
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
              description: 'Use names like: Stethoscope, Clock, ShieldCheck, Users',
            },
          ],
        },
      ],
    }),
    // SERVICES
    defineField({
      name: 'servicesLanding',
      type: 'object',
      title: 'Services Section',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'description', type: 'text'},
        {name: 'heading1', type: 'string'},
        {name: 'heading2', type: 'string'},
      ],
    }),

    // WHY US SECTION
    defineField({
      name: 'whyUs',
      type: 'object',
      title: 'Why Us Section',
      fields: [
        {name: 'badge', type: 'string', title: 'Small Top Title'},
        {name: 'title', type: 'string'},
        {name: 'description', type: 'text'},
        {name: 'points', type: 'array', of: [{type: 'string'}], title: 'Checkmark Points'},
        {name: 'bgImage', type: 'image', options: {hotspot: true}},
        {name: 'cta', type: 'string'},
      ],
    }),

    // CONTACT LANDING SECTION
    defineField({
      name: 'contactSection',
      type: 'object',
      title: 'Contact Section',
      fields: [
        {name: 'heading', type: 'string', title: 'Title'},
        {name: 'paragraph', type: 'text'},
      ],
    }),
  ],
})
