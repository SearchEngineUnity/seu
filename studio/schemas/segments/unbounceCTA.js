export default {
  name: 'unbounceCTA',
  title: 'Unbounce CTA',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Unbounce Link',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'link',
      subtitle: '_type',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Unbounce link: ${title}`,
        subtitle,
      };
    },
  },
};
