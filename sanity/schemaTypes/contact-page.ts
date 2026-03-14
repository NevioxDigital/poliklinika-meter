import {defineType, defineField} from 'sanity'
import {simpleBlockMembers, richBlockMembers} from './blocks'

export const contactPageType = defineType({
  name: 'contactPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
    defineField({name: 'subtitle', type: 'array', of: richBlockMembers}),
    defineField({name: 'formHeading', type: 'array', of: simpleBlockMembers}),
    defineField({name: 'formParagraph', type: 'array', of: richBlockMembers}),
  ],
})
