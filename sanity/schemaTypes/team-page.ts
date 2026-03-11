import {defineField, defineType} from 'sanity'

export const teamPageType = defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    //  SECTION
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      fields: [
        {name: 'title', type: 'string', title: 'Main Title'},
        {name: 'highlightedText', type: 'string', title: 'Colored Text'},
        {name: 'subtitle', type: 'text'},
      ],
    }),

    // CAROUSEL BAR
    defineField({
      name: 'carouselImages',
      type: 'array',
      title: 'Carousel Images',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    // Team Section
    defineField({
      name: 'teamSection',
      type: 'object',
      title: 'Team Section',
      fields: [{name: 'title', type: 'string', title: 'Title'}],
    }),
  ],
})
