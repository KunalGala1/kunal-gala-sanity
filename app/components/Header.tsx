'use client';
import React, { useState } from 'react';
import Burger from './Burger';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    if (navOpen) {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className='flex justify-between items-center p-8 max-w-6xl mx-auto'>
      <div>
        <Link href='/'>
          <h1 className='font-bold text-4xl text-slate-400 uppercase'>
            Kunal Gala
          </h1>
        </Link>
        <h2 className='text-slate-500'>Composer and Percussionist</h2>
      </div>
      <Burger isOpen={navOpen} toggleNav={toggleNav} />
      <Nav isOpen={navOpen} toggleNav={toggleNav} />
    </header>
  );
};
export default Header;
