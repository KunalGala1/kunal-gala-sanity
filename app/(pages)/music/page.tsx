'use client';
import { useState, useEffect } from 'react';
import { getRecordings } from '@/sanity/sanity.query';
import type { RecordingType } from '@/types';

const MusicPage = () => {
  const [recordings, setRecordings] = useState<RecordingType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const recordings: RecordingType[] = await getRecordings();
        setRecordings(recordings);
        console.log(recordings);
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
    <div className='p-4 space-y-4 md:space-y-0 md:flex md:items-start md:gap-8 md:justify-center md:flex-wrap'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {recordings &&
        recordings.map((recording) => (
          <div
            key={recording._id}
            className='p-8 bg-slate-100/10 rounded flex-1 min-w-[25%] max-w-full'
          >
            <div className='py-4'>
              <h2 className='font-bold text-xl capitalize'>
                {recording.title}
              </h2>
              <p className='text-slate-50/50'>{recording.subtitle}</p>
            </div>
            <div className='mt-4'>
              <iframe
                width='100%'
                height='300'
                allow='autoplay'
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${recording.soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
              ></iframe>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MusicPage;
