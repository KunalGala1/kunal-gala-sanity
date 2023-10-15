import Link from 'next/link';
import NavListItem from './NavListItem';

const Nav = ({ isOpen, toggleNav }) => {
  return (
    <nav
      className={`${
        isOpen ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
      } fixed w-screen h-screen bg-slate-950 top-0 left-0 z-10 flex justify-center items-center transition`}
    >
      <ul className='flex justify-center items-center gap-4 flex-col'>
        <NavListItem href={'/'} toggleNav={toggleNav}>
          home
        </NavListItem>
        <NavListItem href={'/about'} toggleNav={toggleNav}>
          about
        </NavListItem>
        <NavListItem href={'/music'} toggleNav={toggleNav}>
          music
        </NavListItem>
      </ul>
    </nav>
  );
};
export default Nav;
