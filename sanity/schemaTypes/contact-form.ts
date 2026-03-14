import {defineType, defineField} from 'sanity'
import {richBlockMembers, simpleBlockMembers} from './blocks'

export const contactFormType = defineType({
  name: 'contactForm',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
    defineField({name: 'subtitle', type: 'array', of: richBlockMembers}),
    {name: 'image', type: 'image'},
    {name: 'ctaLabel', type: 'string'},
  ],
})
