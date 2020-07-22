import { MdBusiness } from 'react-icons/md';

export default {
  name: 'companyInfo',
  title: 'Contact Info',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'address1',
      title: 'Address 1',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address 2',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'ZIP Code',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
  ],
};
