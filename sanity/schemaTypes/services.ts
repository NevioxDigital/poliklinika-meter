import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'image', type: 'image'}),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., Heart, Baby, Bone)',
      options: {
        list: [
          // Specijalnosti
          {title: 'Activity (Interna)', value: 'Activity'},
          {title: 'Baby (Ginekologija)', value: 'Baby'},
          {title: 'Heart (Kardiologija)', value: 'Heart'},
          {title: 'Brain (Neurologija)', value: 'Brain'},
          {title: 'Bone (Ortopedija)', value: 'Bone'},
          {title: 'Syringe (Kirurgija)', value: 'Syringe'},
          {title: 'UserRound (Urologija)', value: 'UserRound'},
          {title: 'Wind (Pulmologija)', value: 'Wind'},
          {title: 'Stethoscope (Psihijatrija)', value: 'Stethoscope'},
          {title: 'Radiation (Radiologija)', value: 'Radiation'},
          // Medicina rada
          {title: 'ClipboardList (Zaposljavanje)', value: 'ClipboardList'},
          {title: 'Car (Vozači)', value: 'Car'},
          {title: 'Crosshair (Oružje)', value: 'Crosshair'},
          {title: 'Trophy (Sportaši)', value: 'Trophy'},
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
