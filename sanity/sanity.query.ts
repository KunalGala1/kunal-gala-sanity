import { groq } from 'next-sanity';
import client from './sanity.client';

export const getProfile = async () => {
  return client.fetch(
    groq`*[_type == 'profile'][0]{
            _id,
            name,
            headline,
            profileImage {alt, "image": asset->url},
            shortBio,
            fullBio
        }`
  );
};
