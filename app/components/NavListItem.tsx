import Link from 'next/link';

type NavListItemProps = {
  href: string;
  toggleNav: () => void;
  children: React.ReactNode;
};

const NavListItem = ({ href, toggleNav, children }: NavListItemProps) => {
  return (
    <li>
      <Link
        href={href}
        onClick={toggleNav}
        className='text-slate-200 hover:text-white transition capitalize'
      >
        {children}
      </Link>
    </li>
  );
};
export default NavListItem;
