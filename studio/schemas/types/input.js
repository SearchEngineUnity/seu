export default {
  name: 'input',
  type: 'object',
  title: 'Input',
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
      name: 'inputType',
      title: 'Input Type',
      type: 'string',
      options: {
        list: ['text', 'email', 'tel'],
      },
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
    },
  ],
};
