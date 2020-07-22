export default {
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  fields: [
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'guide' }],
    },
  ],
  preview: {
    select: {
      title: 'nav.title',
      subtitle: 'nav.slug.current',
    },
  },
};
