import {defineType} from 'sanity'

export const doctorType = defineType({
  name: 'doctor',
  type: 'document',
  fields: [
    {name: 'name', type: 'string'},
    {name: 'title', type: 'string'},
    {name: 'department', type: 'string'},
    {name: 'image', type: 'image', options: {hotspot: true}},
  ],
})
