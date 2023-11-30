import { defineField } from 'sanity';
import { BiVideo } from 'react-icons/bi';

const video = {
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: BiVideo,
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
      name: 'youtubeId',
      title: 'Youtube ID',
      type: 'string',
    },
  ],
};

export default video;
