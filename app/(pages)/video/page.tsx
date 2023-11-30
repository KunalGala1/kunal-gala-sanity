'use client';
import { useState, useEffect } from 'react';
import { getVideos } from '@/sanity/sanity.query';
import type { VideoType } from '@/types';

const VideoPage = () => {
  const [videos, setVideos] = useState<VideoType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const videos: VideoType[] = await getVideos();
        setVideos(videos);
        console.log(videos);
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

      {videos &&
        videos.map((video) => (
          <div
            key={video._id}
            className='bg-slate-100/10 rounded w-[500px] max-w-full'
          >
            <div className='p-8 py-4'>
              <h2 className='font-bold text-xl capitalize'>{video.title}</h2>
              <p className='text-slate-50/50'>{video.subtitle}</p>
            </div>
            <div className='mt-4 aspect-video'>
              <iframe
                width='100%'
                height='100%'
                allow='autoplay'
                //<iframe width="560" height="315" src="https://www.youtube.com/embed/xMTOlE32_Js?si=hZI1yrdWFFvHM77V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
    </div>
  );
};
export default VideoPage;
