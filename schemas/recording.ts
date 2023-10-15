import { defineField } from 'sanity';
import { BiMusic } from 'react-icons/bi';

const recording = {
  name: 'recording',
  title: 'Recording',
  type: 'document',
  icon: BiMusic,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'soundcloudId',
      title: 'Soundcloud ID',
      type: 'string',
    },
  ],
};

export default recording;
