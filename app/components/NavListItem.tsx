import Link from 'next/link';

const NavListItem = ({ href, toggleNav, children }) => {
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
