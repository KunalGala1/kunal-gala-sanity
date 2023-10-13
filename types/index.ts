import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  name: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  fullBio: PortableTextBlock[];
};
