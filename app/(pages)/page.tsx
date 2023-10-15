import Image from 'next/image';
import Link from 'next/link';

const HomePage = async () => {
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
      <div className='max-w-lg mx-auto text-center space-y-8 p-4'>
        <p className='text-lg'>
          Kunal Gala is a composer, and percussionist based in Queens, NY...
        </p>
        <p>
          <Link
            href={'/about'}
            className='py-2 px-4 rounded bg-slate-800 hover:bg-slate-700 transition'
          >
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};
export default HomePage;
