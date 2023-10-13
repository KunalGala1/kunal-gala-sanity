import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';

const page = async () => {
  const profile: ProfileType = await getProfile();
  console.log(profile);
  return <div>{profile && <div>{profile.name}</div>}</div>;
};
export default page;
