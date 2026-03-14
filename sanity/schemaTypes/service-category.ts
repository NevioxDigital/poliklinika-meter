import {defineType, defineField} from 'sanity'
import {simpleBlockMembers, richBlockMembers} from './blocks'

export const categoryType = defineType({
  name: 'category',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
    defineField({name: 'description', type: 'array', of: richBlockMembers}),
    {name: 'slug', type: 'slug', options: {source: 'title'}},
    {name: 'seo', type: 'seo'},
  ],
})
