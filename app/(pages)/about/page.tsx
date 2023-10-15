'use client';
import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const AboutPage = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const profile: ProfileType = await getProfile();
        setProfile(profile);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error as Error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className='w-full p-4 flex flex-col items-stretch gap-8 max-w-6xl mx-auto lg:flex-row-reverse'>
      {profile ? null : (
        <div className='w-full lg:w-2/3 h-[500px] rounded bg-slate-50/5'></div>
      )}
      {profile && (
        <div className='lg:w-2/3'>
          <Image
            src={profile.image.image}
            alt={profile.image.alt}
            height={500}
            width={500}
            unoptimized={true}
            priority
            className='rounded w-full bg-cover'
          ></Image>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {profile && (
        <div className='space-y-4'>
          <PortableText value={profile.fullBio} />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
