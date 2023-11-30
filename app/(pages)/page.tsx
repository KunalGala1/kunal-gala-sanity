'use client';
import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
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
    <div className='p-4 space-y-4 max-w-6xl mx-auto'>
      <Image
        src='/hero.jpg'
        width={500}
        height={500}
        alt='Picture of Kunal'
        className='w-full rounded object-cover'
        unoptimized={true}
        priority
      />

      {loading && <p className='text-center p-4'>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {profile && (
        <div className='max-w-lg mx-auto text-center space-y-8 p-4'>
          <p className='text-lg'>{profile.shortBio}</p>
          <p>
            <Link
              href={'/about'}
              className='py-2 px-4 rounded bg-slate-800 hover:bg-slate-700 transition'
            >
              Read more
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
export default HomePage;
