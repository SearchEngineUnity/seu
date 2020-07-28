export default {
  name: 'leftRight',
  title: 'LR',
  type: 'document',
  fields: [
    {
      name: 'leader',
      title: 'Leader text',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'order',
      title: 'LR Order',
      type: 'string',
      options: {
        list: [
          { title: 'Start Text Box left', value: 'text' },
          { title: 'Start Image Box Left', value: 'image' },
        ],
      },
    },
    {
      name: 'set',
      title: 'Set',
      type: 'array',
      of: [{ type: 'lrImageText' }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'simpleBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
    prepare({ title, subtitle }) {
      return {
        title: `LR Segment: ${title}`,
        subtitle,
      };
    },
  },
};
