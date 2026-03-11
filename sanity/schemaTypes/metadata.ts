import {defineField, defineType} from 'sanity'

export const metadataType = defineType({
  name: 'siteData',
  title: 'Global Data',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Default title for SEO',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'phone', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'address', type: 'string', description: 'Street, Number, City, Zip'},
        {name: 'googleMapsUrl', type: 'url'},
        {name: 'lat', type: 'number', title: 'Latitude'},
        {name: 'lng', type: 'number', title: 'Longitude'},
      ],
    }),
    defineField({
      name: 'openingHours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'days', type: 'string', placeholder: 'Monday - Friday'},
            {name: 'hours', type: 'string', placeholder: '08:00 - 20:00'},
          ],
        },
      ],
    }),
    defineField({
      name: 'socials',
      type: 'object',
      fields: [
        {name: 'facebook', type: 'url'},
        {name: 'instagram', type: 'url'},
      ],
    }),
  ],
})
