import {defineType, defineField} from 'sanity'
import {richBlockMembers, simpleBlockMembers} from './blocks'

export const serviceType = defineType({
  name: 'service',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'array', of: simpleBlockMembers}),
    defineField({name: 'description', type: 'array', of: richBlockMembers}),
    {name: 'slug', type: 'slug', options: {source: 'title'}},
    {name: 'icon', type: 'string'},
    {name: 'category', type: 'reference', to: [{type: 'category'}]},
  ],
})
