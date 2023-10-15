import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import Link from 'next/link';

const page = async () => {
  const profile: ProfileType = await getProfile();
  return (
    <div>
      {profile && <div>{profile.name}</div>}
      <div>
        <Link href={'https://soundcloud.com/kunal_gala16'}>Soundcloud</Link>
      </div>
    </div>
  );
};
export default page;
