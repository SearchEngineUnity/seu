export default {
  name: 'lrImageText',
  title: 'LR - Image and Text',
  type: 'object',
  fields: [
    {
      name: 'textBox',
      title: 'Text Box',
      type: 'textBox',
    },
    {
      name: 'imageBox',
      title: 'Image Box',
      type: 'illustration',
    },
  ],
  preview: {
    select: {
      title: 'textBox.title',
      media: 'imageBox.image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
