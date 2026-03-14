// schemas/objects/seo.ts
import {defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  type: 'object',
  fields: [
    {name: 'title', type: 'string'}, // SEO titles must be strings
    {name: 'description', type: 'text'}, // SEO descriptions must be text
    {name: 'image', type: 'image'},
  ],
})
