import {defineField, defineType} from 'sanity'
import {richBlockMembers, simpleBlockMembers} from './blocks'

export const teamPageType = defineType({
  name: 'teamPage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
        defineField({name: 'subtitle', type: 'array', of: richBlockMembers}),
      ],
    }),
    {name: 'carouselImages', type: 'array', of: [{type: 'image'}]},
    defineField({
      name: 'teamSection',
      type: 'object',
      fields: [defineField({name: 'title', type: 'array', of: simpleBlockMembers})],
    }),
  ],
})
