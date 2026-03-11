import {defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'}, // "Medicina Rada"
    {name: 'description', type: 'text'},
    {name: 'slug', type: 'slug', options: {source: 'title'}}, // "medicina-rada"
  ],
})
