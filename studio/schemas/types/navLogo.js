export default {
  name: 'navLogo',
  type: 'object',
  title: 'Nav Logo',
  fields: [
    {
      title: 'Brand Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Brand logo',
      name: 'logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
