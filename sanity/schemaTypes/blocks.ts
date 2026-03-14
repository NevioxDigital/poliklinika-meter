import {defineArrayMember} from 'sanity'
import {Highlighter} from 'lucide-react'

export const simpleBlockMembers = [
  defineArrayMember({
    type: 'block',
    styles: [],
    lists: [],
    marks: {
      decorators: [
        {title: 'Strong', value: 'strong'},
        {
          title: 'Highlight',
          value: 'highlight',
          // Casting to any bypasses the React version mismatch error
          // while still showing the icon correctly in the Sanity UI
          icon: Highlighter as any,
        },
      ],
    },
  }),
]

export const richBlockMembers = [
  defineArrayMember({
    type: 'block',
    styles: [{title: 'Normal', value: 'normal'}],
    lists: [{title: 'Bullet', value: 'bullet'}],
    marks: {
      decorators: [
        {title: 'Strong', value: 'strong'},
        {title: 'Emphasis', value: 'em'},
        {
          title: 'Highlight',
          value: 'highlight',
          icon: Highlighter as any,
        },
      ],
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [{name: 'href', type: 'url', title: 'URL'}],
        },
      ],
    },
  }),
]
