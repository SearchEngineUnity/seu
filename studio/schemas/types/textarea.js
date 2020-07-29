export default {
  name: 'textarea',
  type: 'object',
  title: 'Textarea',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'placeholder',
      type: 'string',
      title: 'Placeholder',
      description: 'This populates the example within the input box',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Give one word that describes this field ',
    },
    {
      name: 'rows',
      title: 'Number of rows of text',
      type: 'string',
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
    },
  ],
};
