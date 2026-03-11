// schemas/categoryType.ts
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories (Pages)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Category Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      title: 'URL Slug',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Page Introduction Text',
    }),
    // Reusable SEO object
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO data',
    }),
  ],
})
